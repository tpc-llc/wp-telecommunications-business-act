import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/react'

const EnvironmentCheck: React.FC = () => {
  return (
        <Box>
            <Text>パーマリンク設定を基本以外に設定してください。</Text>
            <Text>パーマリンク設定が基本に設定されているため、REST APIが無効化されています。</Text>
        </Box>
  )
}

export default EnvironmentCheck
