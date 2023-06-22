import React from 'react'
import { Box, Text } from '@chakra-ui/react'

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
            <ul>
                {props.sendInfoExamples.map((example, index) => (
                    <li key={example + index.toString()}>{example}</li>
                ))}
            </ul>
        </Box>
  )
}

export default ServicePolicyExamples
