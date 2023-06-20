import React from 'react'
import {
  Flex,
  Box,
  Text,
  Anchor,
  Title,
  Stack,
  Collapse,
  Button,
  Group,
  Divider,
  List,
  Card
} from '@mantine/core'
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
        <Card shadow="sm" radius="md" withBorder>
            <Stack>
                <Flex>
                    <Group>
                        <Box>
                            <Text>{props.classification}</Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box>
                            <Text>{props.companyLink != null ? <Anchor href={props.companyLink}>{props.companyName}</Anchor> : props.companyName}</Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box>
                            {props.verified ? <Text>公式</Text> : null}
                        </Box>
                        <Divider orientation="vertical" />
                        <Box>
                            <Text>
                                {props.serviceLink != null ? <Anchor href={props.serviceLink}>{props.serviceName}</Anchor> : props.serviceName}
                            </Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box>
                            <Text>
                                {props.optoutLink != null ? <Anchor href={props.optoutLink}>オプトアウト</Anchor> : '提供なし'}
                            </Text>
                        </Box>
                        <Divider orientation="vertical" />
                        <Box>
                            <Text>
                                {props.privacyPolicyLink != null ? <Anchor href={props.privacyPolicyLink}>{props.privacyPolicyText}</Anchor> : '提供なし'}
                            </Text>
                        </Box>
                        <Box>
                            <Button onClick={toggle}>詳細</Button>
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
        </Card>
  )
}

export default ServicePolicyRow
