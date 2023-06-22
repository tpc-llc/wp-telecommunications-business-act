import React from 'react'
import { Text, Box } from '@mantine/core'
import ServicePolicyRow from '../components/ServicePolicyRow/ServicePolicyRow'
import { ServiceOfficialPolicies } from '../lib/service-policy/ServiceOfficialPolicies'

const ServiceSelectPage: React.FC = () => {
  return (
    <Box>
      <Text>Service Select Page</Text>
      <Box
        w={'100%'}
      >
        {Object.values(ServiceOfficialPolicies).map((policy) => (
          <ServicePolicyRow key={policy.uid} {...policy} />
        ))}
      </Box>
    </Box>
  )
}

export default ServiceSelectPage
