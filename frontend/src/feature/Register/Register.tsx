import React from 'react'
import {
  Heading,
  VStack,
  HStack,
  FormLabel,
  FormControl,
  Input,
  Button,
  Checkbox,
  Text
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export interface RegisterProps {
  email: string
}

interface RegisterFormValues {
  email: string
  emailOptin: boolean
}

const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: props.email,
      emailOptin: true
    },
    mode: 'onChange'
  })

  const onSubmit: (formData: RegisterFormValues) => void = (formData: RegisterFormValues) => {
    console.log(formData)
  }

  return (
    <VStack>
      <Heading as={'h1'}>サービス利用登録</Heading>
      <form onSubmit={
        /* eslint no-void: 0 */
        (...args) => void handleSubmit(onSubmit)(...args)
      }>
        <VStack>
          <FormControl>
            <HStack
              align={'center'}
            >
              <Checkbox
                defaultChecked={true}
                {...register('emailOptin')}
              />
              <FormLabel
                m={0}
              >当社からのお役立ち情報を受け取る（管理画面からいつでも購読解除できます）</FormLabel>
            </HStack>
          </FormControl>

          <FormControl>

            <HStack
              w={'100%'}
              alignItems={'center'}
            >
              <FormLabel
                w={'10rem'}
                m={0}
              >メールアドレス</FormLabel>
              <Input
                w={'100%'}
                type='email'
                {...register('email', {
                  required: '※メールアドレスを入力してください',
                  pattern: {
                    value: /^[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                    message: '※入力形式がメールアドレスではありません。'
                  }
                })}
              />
            </HStack>
          </FormControl>
          {(errors.email != null) && (
            <Text color={'red'}>{errors.email.message}</Text>
          )}
          <Button
            colorScheme='blue'
            isLoading={isSubmitting}
            isDisabled={!isDirty && !isValid}
            type='submit'>
            利用規約に同意して登録する
          </Button>
        </VStack>
      </form>
    </VStack >
  )
}

export default Register
