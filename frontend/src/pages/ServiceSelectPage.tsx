import React from 'react'
import { Box } from '@mantine/core'
import ServicePolicyHeader from '../components/ServicePolicyHeader/ServicePolicyHeader'
import ServicePolicyRow from '../components/ServicePolicyRow/ServicePolicyRow'
import { ServiceOfficialPolicies } from '../lib/service-policy/ServiceOfficialPolicies'

const ServiceSelectPage: React.FC = () => {
  return (
    <Box>
      <Box
        w={'100%'}
      >
        <ServicePolicyHeader showCheckboxHeader={false} />
        {Object.values(ServiceOfficialPolicies).map((policy) => (
          <ServicePolicyRow key={policy.uid} {...policy} />
        ))}
      </Box>
    </Box>
  )
}

export default ServiceSelectPage
