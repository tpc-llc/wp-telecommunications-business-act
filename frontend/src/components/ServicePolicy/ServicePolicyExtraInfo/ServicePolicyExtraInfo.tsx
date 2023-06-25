import React from 'react'
import {
  Stack
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
    <Stack
      spacing={4}
    >
      <ServicePolicyPurpose
        purpose={props.purpose}
      />
      <ServicePolicyExamples
        sendInfoExamples={props.sendInfoExamples}
      />
      {(props.additionalInfo != null) && (
        <ServicePolicyOthers
          additionalInfo={props.additionalInfo}
        />
      )}
    </Stack>
  )
}

export default ServicePolicyExtraInfo
