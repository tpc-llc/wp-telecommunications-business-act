import React from 'react'
import {
  Box
} from '@chakra-ui/react'

import ServicePolicyPurpose from './ServicePolicyPurpose/ServicePolicyPurpose'
import ServicePolicyExamples from './ServicePolicyExamples/ServicePolicyExamples'
import ServicePolicyOthers from './ServicePolicyOthers/ServicePolicyOthers'

export interface ServicePolicyExtraInfoProps {
  purpose: React.JSX.Element
  sendInfoExamples: string[]
  additionalInfo?: React.JSX.Element
}

const ServicePolicyExtraInfo: React.FC<ServicePolicyExtraInfoProps> = (props: ServicePolicyExtraInfoProps) => {
  return (
        <Box>
            <ServicePolicyPurpose
                purpose={props.purpose}
            />
            <ServicePolicyExamples
                sendInfoExamples={props.sendInfoExamples}
            />
            <ServicePolicyOthers
                additionalInfo={props.additionalInfo}
            />
        </Box>
  )
}

export default ServicePolicyExtraInfo
