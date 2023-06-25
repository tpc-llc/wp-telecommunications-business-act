import React from 'react'
import { Flex, HStack, Text, Link } from '@chakra-ui/react'

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
        <Flex
          w={'2rem'}
          h={'2rem'}
          justify={'center'}
          align={'center'}
        >
          <VerifiedIcon color={'green'} />
        </Flex>
      )}
    </HStack>
  )
}

export default ServicePolicyCompanyName
