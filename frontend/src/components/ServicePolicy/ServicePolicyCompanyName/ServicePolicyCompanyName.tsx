import React from 'react'
import { Box, HStack, Text, Link } from '@chakra-ui/react'

import { MdOutlineVerified as VerifiedIcon } from 'react-icons/md'

export interface ServicePolicyCompanyNameProps {
  companyName: string
  companyLink?: string
  verified: boolean
}

const ServicePolicyCompanyName: React.FC<ServicePolicyCompanyNameProps> = (props: ServicePolicyCompanyNameProps) => {
  return (
    <HStack
      spacing={0}
    >
      <Text>
        {props.companyLink != null
          ? <Link
            href={props.companyLink}
            color={'#1E50B5 !important'}
          >
            {props.companyName}
          </Link>
          : props.companyName
        }
      </Text>
      {props.verified && (
        <Box
          w={'1rem'}
          h={'1rem'}
        >
          <VerifiedIcon color={'green'} />
        </Box>
      )}
    </HStack>
  )
}

export default ServicePolicyCompanyName
