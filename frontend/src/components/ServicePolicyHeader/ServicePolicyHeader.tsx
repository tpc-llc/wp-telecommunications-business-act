import React from 'react'
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react'

export const ServicePolicyHeader: React.FC = () => {
  return (
    <Flex>
      <Flex
      >
        <Box
        >
          <Text>分類</Text>
        </Box>
        <Box
        >
          <Text>
            企業名
          </Text>
        </Box>
        <Box
        >
          <Text>
            サービス名
          </Text>
        </Box>
        <Box
        >
          <Text>
            オプトアウト
          </Text>
        </Box>
        <Box
        >
          <Text>
            プライバシーポリシー
          </Text>
        </Box>
        <Box>
          <Text>外部送信情報など</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ServicePolicyHeader
