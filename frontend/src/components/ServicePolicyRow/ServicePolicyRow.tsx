import React from 'react'
import {
  Flex,
  Box,
  Text,
  Anchor,
  Title,
  Stack,
  Collapse,
  Group,
  Divider,
  List,
  ThemeIcon
} from '@mantine/core'
import { MdOutlineVerified as VerifiedIcon } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { useDisclosure } from '@mantine/hooks'

export interface ServicePolicyRowProps {
  uid: string
  classification: string
  companyName: string
  companyLink?: string
  verified: boolean
  serviceName: string
  serviceLink?: string
  optoutLink?: string
  privacyPolicyText?: string
  privacyPolicyLink?: string
  purpose: React.JSX.Element
  sendInfoExamples: string[]
  additionalInfo?: React.JSX.Element
}

export const ServicePolicyRow: React.FC<ServicePolicyRowProps> = (props: ServicePolicyRowProps) => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
        <Box>
            <Stack align='flex-start' justify='flex-start'>
                <Flex
                    justify="space-around"
                >
                    <Group>
                        <Box
                            sx={{
                              width: '120px'
                            }}
                        >
                            <Text>{props.classification}</Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box
                            sx={{
                              width: '240px'
                            }}
                        >
                            <Flex
                                align="center"
                            >
                                <Text>
                                    {props.companyLink != null
                                      ? <Anchor href={props.companyLink} color={'#1E50B5'}>{props.companyName}</Anchor>
                                      : props.companyName
                                    }
                                </Text>
                                {props.verified
                                  ? <ThemeIcon
                                        sx={{
                                          color: '#50C878',
                                          backgroundColor: 'transparent'
                                        }}
                                    >
                                        <VerifiedIcon />
                                    </ThemeIcon>
                                  : null}
                            </Flex>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box
                            sx={{
                              width: '240px'
                            }}
                        >
                            <Text>
                                {props.serviceLink != null ? <Anchor href={props.serviceLink} color={'#1E50B5'}>{props.serviceName}</Anchor> : props.serviceName}
                            </Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box
                            sx={{
                              width: '100px'
                            }}
                        >
                            <Text>
                                {props.optoutLink != null ? <Anchor href={props.optoutLink} color={'#1E50B5'}>オプトアウト</Anchor> : '提供なし'}
                            </Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box
                            sx={{
                              width: '160px'
                            }}
                        >
                            <Text>
                                {props.privacyPolicyLink != null
                                  ? <Anchor href={props.privacyPolicyLink} color={'#1E50B5'}>プライバシーポリシー</Anchor>
                                  : '提供なし'}
                            </Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box>
                            <Box onClick={toggle}>
                                <Flex
                                    align={'center'} justify={'center'}
                                >
                                    <Text
                                        color={'#1E50B5'}
                                    >
                                        外部送信情報はこちら
                                    </Text>
                                    {opened
                                      ? <ThemeIcon
                                            sx={{
                                              color: '#1E50B5',
                                              backgroundColor: 'transparent'
                                            }}
                                        >
                                            <AiOutlineMinus />
                                        </ThemeIcon>
                                      : <ThemeIcon
                                            sx={{
                                              color: '#1E50B5',
                                              backgroundColor: 'transparent'
                                            }}
                                        >
                                            <AiOutlinePlus />
                                        </ThemeIcon>}
                                </Flex>
                            </Box>
                        </Box>
                    </Group>
                </Flex>
                <Collapse in={opened} w={'100%'}>
                    <Box>
                        <Box
                            mb={16}
                        >
                            <Title order={4}>利用目的</Title>
                            {props.purpose}
                        </Box>
                        <Box
                            mb={16}
                        >
                            <Title order={4}>送信情報例</Title>
                            <List>
                                {props.sendInfoExamples.map((example, index) => (
                                    <List.Item key={example + index.toString()}>{example}</List.Item>
                                ))}
                            </List>
                        </Box>
                        {(props.additionalInfo != null)
                          ? (
                                <Box>
                                    <Title order={2}>その他</Title>
                                    {props.additionalInfo}
                                </Box>
                            )
                          : null}
                    </Box>
                </Collapse>
            </Stack>
        </Box>
  )
}

export default ServicePolicyRow
