import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export interface ServicePolicyPurposeProps {
  purpose: React.JSX.Element
}

const ServicePolicyPurpose: React.FC<ServicePolicyPurposeProps> = (props: ServicePolicyPurposeProps) => {
  return (
    <Box
    >
      <Heading
        mb={'2 !important'}
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
