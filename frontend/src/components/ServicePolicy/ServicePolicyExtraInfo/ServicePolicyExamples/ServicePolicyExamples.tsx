import React from 'react'
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react'

export interface ServicePolicyExamplesProps {
  sendInfoExamples: string[]
}

const ServicePolicyExamples: React.FC<ServicePolicyExamplesProps> = (props: ServicePolicyExamplesProps) => {
  return (
        <Box
            mb={16}
        >
            <Text
                mb={2}
            >
                送信情報例
            </Text>
            <UnorderedList>
                {props.sendInfoExamples.map((example, index) => (
                    <ListItem key={example + index.toString()}>{example}</ListItem>
                ))}
            </UnorderedList>
        </Box>
  )
}

export default ServicePolicyExamples
