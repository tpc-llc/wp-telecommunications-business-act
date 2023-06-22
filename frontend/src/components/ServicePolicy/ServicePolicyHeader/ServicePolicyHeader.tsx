import React from 'react'
import {
  Tr,
  Th,
  Text,
  Flex
} from '@chakra-ui/react'

export interface ServicePolicyHeaderProps {
  useCheckbox: boolean
}

export const ServicePolicyHeader: React.FC<ServicePolicyHeaderProps> = (props: ServicePolicyHeaderProps) => {
  return (
    <>
      <Tr>
        {props.useCheckbox && (
          <Th>
            <Flex
              justify={'center'}
              align={'center'}
            >
              <Text>利用中</Text>
            </Flex>
          </Th>
        )}
        <Th><Text>分類</Text></Th>
        <Th><Text>企業名</Text></Th>
        <Th><Text>サービス名</Text></Th>
        <Th><Text>オプトアウト</Text></Th>
        <Th><Text>プライバシーポリシー</Text></Th>
        <Th><Text>外部送信情報など</Text></Th>
      </Tr>
    </>
  )
}

export default ServicePolicyHeader
