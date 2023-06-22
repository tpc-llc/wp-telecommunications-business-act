import React from 'react'
import { HStack, Text, Link } from '@chakra-ui/react'

import { MdOutlineVerified as VerifiedIcon } from 'react-icons/md'

export interface ServicePolicyCompanyNameProps {
  companyName: string
  companyLink?: string
  verified: boolean
}

const ServicePolicyCompanyName: React.FC<ServicePolicyCompanyNameProps> = (props: ServicePolicyCompanyNameProps) => {
  return (
        <HStack>
            <Text>
                {props.companyLink != null
                  ? <Link
                        href={props.companyLink}
                        color={'#1E50B5'}
                    >
                        {props.companyName}
                    </Link>
                  : props.companyName
                }
            </Text>
            {props.verified && <VerifiedIcon />}
        </HStack>
  )
}

export default ServicePolicyCompanyName
