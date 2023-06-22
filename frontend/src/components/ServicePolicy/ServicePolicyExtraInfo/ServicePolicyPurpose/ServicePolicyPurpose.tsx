import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export interface ServicePolicyPurposeProps {
  purpose: React.JSX.Element
}

const ServicePolicyPurpose: React.FC<ServicePolicyPurposeProps> = (props: ServicePolicyPurposeProps) => {
  return (
        <Box
            mb={16}
        >
            <Text
                mb={2}
            >
                利用目的
            </Text>
            {props.purpose}
        </Box>
  )
}

export default ServicePolicyPurpose
