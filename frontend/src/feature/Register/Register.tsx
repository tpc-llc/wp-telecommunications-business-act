import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/react'

export interface RegisterProps {
  email: string
}

const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  return (
    <Box>
      <Text>ユーザー登録: {props.email}</Text>
    </Box>
  )
}

export default Register
