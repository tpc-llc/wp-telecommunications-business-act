import React, { useState } from 'react'
import {
  Flex,
  Box,
  Text,
  Stack,
  Link,
  Heading,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { MdOutlineVerified as VerifiedIcon } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

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
  const [opened, setOpened] = useState(false)
  const toggle = (): void => { setOpened(!opened) }

  return (
        <Box>
            <Stack>
                <Flex
                >
                    <Box
                    >
                        <Text>{props.classification}</Text>
                    </Box>
                    <Box
                    >
                        <Flex
                        >
                            <Text>
                                {props.companyLink != null
                                  ? <Link href={props.companyLink} color={'#1E50B5'}>{props.companyName}</Link>
                                  : props.companyName
                                }
                            </Text>
                            {props.verified && <VerifiedIcon />}
                        </Flex>
                    </Box>
                    <Box
                    >
                        <Text>
                            {props.serviceLink != null ? <Link href={props.serviceLink} color={'#1E50B5'}>{props.serviceName}</Link> : props.serviceName}
                        </Text>
                    </Box>
                    <Box
                    >
                        <Text>
                            {props.optoutLink != null ? <Link href={props.optoutLink} color={'#1E50B5'}>オプトアウト</Link> : '提供なし'}
                        </Text>
                    </Box>
                    <Box
                    >
                        <Text>
                            {props.privacyPolicyLink != null
                              ? <Link href={props.privacyPolicyLink} color={'#1E50B5'}>プライバシーポリシー</Link>
                              : '提供なし'}
                        </Text>
                    </Box>
                    <Box>
                        <Box onClick={toggle}>
                            <Flex
                            >
                                <Text
                                    color={'#1E50B5'}
                                >
                                    外部送信情報はこちら
                                </Text>
                                {opened ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                {opened && (
                    <Box>
                        <Box
                            mb={16}
                        >
                            <Heading size='md'>利用目的</Heading>
                            {props.purpose}
                        </Box>
                        <Box
                            mb={16}
                        >
                            <Heading size='md'>送信情報例</Heading>
                            <UnorderedList>
                                {props.sendInfoExamples.map((example, index) => (
                                    <ListItem key={example + index.toString()}>{example}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                        {(props.additionalInfo != null)
                          ? (
                                <Box>
                                    <Heading size='md'>その他</Heading>
                                    {props.additionalInfo}
                                </Box>
                            )
                          : null}
                    </Box>
                )}
            </Stack>
        </Box>
  )
}

export default ServicePolicyRow
