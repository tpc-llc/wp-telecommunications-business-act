import React from 'react'
import {
  Flex,
  Box,
  Text,
  Group,
  Divider
} from '@mantine/core'

export interface ServicePolicyHeaderProps {
  showCheckboxHeader: boolean
}

export const ServicePolicyHeader: React.FC<ServicePolicyHeaderProps> = (props: ServicePolicyHeaderProps) => {
  return (
        <Flex
            justify="space-between"
            sx={{
              borderBottom: '1px solid #E0E0E0',
              marginBottom: '8px'
            }
            }
        >
            <Group
                sx={{
                  marginBottom: '8px'
                }}
            >
                {props.showCheckboxHeader && (
                    <Box
                        sx={{
                          width: '100px'
                        }}
                    >
                        <Text>選択</Text>
                    </Box>
                )}
                <Box
                    sx={{
                      width: '120px'
                    }}
                >
                    <Text>分類</Text>
                </Box>
                <Divider orientation="vertical" />
                <Box
                    sx={{
                      width: '240px'
                    }}
                >
                    <Text>
                        企業名
                    </Text>
                </Box>
                <Divider orientation="vertical" />
                <Box
                    sx={{
                      width: '240px'
                    }}
                >
                    <Text>
                        サービス名
                    </Text>
                </Box>
                <Divider orientation="vertical" />
                <Box
                    sx={{
                      width: '100px'
                    }}
                >
                    <Text>
                        オプトアウト
                    </Text>
                </Box>
                <Divider orientation="vertical" />
                <Box
                    sx={{
                      width: '160px'
                    }}
                >
                    <Text>
                        プライバシーポリシー
                    </Text>
                </Box>
                <Divider orientation="vertical" />
                <Box>
                    <Text>外部送信情報など</Text>
                </Box>
            </Group>
        </Flex>
  )
}

export default ServicePolicyHeader
