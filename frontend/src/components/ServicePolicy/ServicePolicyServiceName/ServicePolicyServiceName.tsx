import React from 'react'
import { Text, Link } from '@chakra-ui/react'

export interface ServicePolicyServiceNameProps {
  serviceName: string
  serviceLink?: string
}

const ServicePolicyServiceName: React.FC<ServicePolicyServiceNameProps> = (props: ServicePolicyServiceNameProps) => {
  return (
        <Text>
            {props.serviceLink != null
              ? <Link
                    href={props.serviceLink}
                    color={'#1E50B5'}
                >
                    {props.serviceName}
                </Link>
              : props.serviceName
            }
        </Text>
  )
}

export default ServicePolicyServiceName
