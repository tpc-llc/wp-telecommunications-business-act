import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export interface ServicePolicyClassificationProps {
  classification: string
}

const ServicePolicyClassification: React.FC<ServicePolicyClassificationProps> = (props: ServicePolicyClassificationProps) => {
  return (
        <Box>
            <Text>{props.classification}</Text>
        </Box>
  )
}

export default ServicePolicyClassification
