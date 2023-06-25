import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export interface ServicePolicyPurposeProps {
  purpose: React.JSX.Element
}

const ServicePolicyPurpose: React.FC<ServicePolicyPurposeProps> = (props: ServicePolicyPurposeProps) => {
  return (
    <Box
      mb={4}
    >
      <Heading
        mb={4}
        as={'h4'}
        fontSize={'1.2rem'}
      >
        利用目的
      </Heading>
      {props.purpose}
    </Box>
  )
}

export default ServicePolicyPurpose
