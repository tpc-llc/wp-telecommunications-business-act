import React, { useState } from 'react'
import {
  Heading,
  VStack,
  HStack,
  FormLabel,
  FormControl,
  Input,
  Button,
  Checkbox,
  Text,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import axiosBaseConfig from '../../lib/axios-config/axios-config'
import { postAdminRegister } from '../../lib/plugin/client'
import { type PostRegisterRequest } from '../../lib/plugin/client.schemas'
import TermsOfService from '../../components/TermsOfService/TermsOfService'

export interface RegisterProps {
  email: string
}

interface RegisterFormValues {
  email: string
  emailOptin: boolean
}

const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const [hasRegistrationError, setHasRegistrationError] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: props.email,
      emailOptin: true
    },
    mode: 'onChange'
  })

  const onSubmit: (formData: RegisterFormValues) => void = (formData: RegisterFormValues) => {
    setHasRegistrationError(false)
    const params: PostRegisterRequest = {
      email: formData.email,
      email_optin: formData.emailOptin
    }
    postAdminRegister(params, axiosBaseConfig).then(() => {
      window.location.reload()
    }
    ).catch(() => {
      setHasRegistrationError(true)
    }
    )
  }

  return (
    <VStack>
      <Heading as={'h1'}>サービス利用登録</Heading>
      <form onSubmit={
        /* eslint no-void: 0 */
        (...args) => void handleSubmit(onSubmit)(...args)
      }>
        <VStack>
          <TermsOfService />
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
            <Alert status='error'>
              <AlertIcon />
              <Text>{errors.email.message}</Text>
            </Alert>
          )}
          {(hasRegistrationError) && (
            <Alert status='error'>
              <AlertIcon />
              <Text>このメールアドレスはすでに使用されています。他のメールアドレスをご利用ください。</Text>
            </Alert>
          )}
          { // isDisabledでスタイルが切り替わらないので表示を切り替えるようにした
            (errors.email == null) && (
              <Button
                colorScheme='blue'
                isLoading={isSubmitting}
                isDisabled={false}
                type='submit'>
                利用規約に同意して登録する
              </Button>
            )}
          {(errors.email != null) && (
            <Button
              colorScheme='blue'
              isLoading={isSubmitting}
              isDisabled={true}
              type='submit'>
              利用規約に同意して登録する
            </Button>
          )}
        </VStack>
      </form>
    </VStack >
  )
}

export default Register
