import React, { useState } from 'react'

import { HStack, Text, Switch, Stack, Heading } from '@chakra-ui/react'

import axiosBaseConfig from '../../lib/axios-config/axios-config'
import { patchAdminEmailOptin } from '../../lib/plugin/client'

interface SwitchOptinProps {
  emailOptin: boolean
}

const SwitchOptin: React.FC<SwitchOptinProps> = (props: SwitchOptinProps) => {
  const [emailOptin, setEmailOptin] = useState<boolean>(props.emailOptin)

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailOptin(event.target.checked)
    patchAdminEmailOptin({
      email_optin: event.target.checked
    }, axiosBaseConfig).catch((error) => {
      console.log(error)
    })
  }

  return (
        <Stack
            spacing={4}
        >
            <Heading as="h3" size="lg">メール配信設定</Heading>
            <HStack>
                <Switch
                    onChange={handleChange}
                    checked={emailOptin}
                />
                <Text>当社からのお役立ち情報を受け取る</Text>
            </HStack>
        </Stack>
  )
}

export default SwitchOptin
