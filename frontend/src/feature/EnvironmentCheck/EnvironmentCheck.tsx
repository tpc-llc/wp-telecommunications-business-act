import React from 'react'
import {
  Box,
  Text,
  Heading,
  Stack,
  HStack,
  OrderedList,
  ListItem
} from '@chakra-ui/react'
import { MdError, MdCheckCircle } from 'react-icons/md'

const EnvironmentCheck: React.FC = () => {
  return (
        <Box>
            <Stack
                justifyContent={'left'}
                spacing={8}
            >
                <Stack
                    spacing={4}
                >
                    <HStack>
                        <Heading as={'h1'} m={0}><MdError color={'red'} /></Heading>
                        <Heading as={'h1'} m={0}>APIエンドポイントにアクセスできません</Heading>
                    </HStack>
                    <Text m={0}>パーマリンク設定が基本に設定されているため、APIエンドポイントが無効化されています。</Text>
                </Stack>
                <Stack
                    spacing={4}
                >
                    <HStack>
                        <Heading as={'h1'} m={0}><MdCheckCircle color={'green'} /></Heading>
                        <Heading as={'h1'} m={0}>解決策</Heading>
                    </HStack>
                    <OrderedList>
                        <ListItem>
                            <Text m={0}>管理画面の「設定」の中にある「パーマリンク」を開いてください。</Text>
                        </ListItem>
                        <ListItem>
                            <Text m={0}>パーマリンク設定を「基本」以外に設定してください。</Text>
                        </ListItem>
                    </OrderedList>
                </Stack>
            </Stack>
        </Box>
  )
}

export default EnvironmentCheck
