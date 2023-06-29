import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export interface ServicePolicyOthersProps {
  additionalInfo?: React.JSX.Element
}

const ServicePolicyOthers: React.FC<ServicePolicyOthersProps> = (props: ServicePolicyOthersProps) => {
  return (
    <Box
      mb={4}
    >
      {(props.additionalInfo != null)
        ? (
          <Box>
            <Heading
              mb={'2 !important'}
              as={'h4'}
              fontSize={'1.2rem'}
            >
              その他
            </Heading>
            {props.additionalInfo}
          </Box>
          )
        : null}
    </Box>
  )
}

export default ServicePolicyOthers
