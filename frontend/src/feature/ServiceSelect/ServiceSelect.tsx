import React from 'react'
import {
  Table,
  Tbody,
  Thead,
  Stack,
  Heading
} from '@chakra-ui/react'
import { ServiceOfficialPolicies } from '../../lib/service-policy/ServiceOfficialPolicies'
import ServicePolicyHeader from '../../components/ServicePolicy/ServicePolicyHeader/ServicePolicyHeader'
import ServicePolicyRow from '../../components/ServicePolicy/ServicePolicyRow/ServicePolicyRow'

import axiosBaseConfig from '../../lib/axios-config/axios-config'
import { postAdminServicePolicies } from '../../lib/plugin/client'
import { type PostServicePoliciesRequest } from '../../lib/plugin/client.schemas'

export interface ServiceSelectProps {
  selectedServiceOfficialPoliciesUids: string[]
  setSelectedServiceOfficialPoliciesUids: React.Dispatch<React.SetStateAction<string[]>>
}

const ServiceSelect: React.FC<ServiceSelectProps> = (props: ServiceSelectProps) => {
  const syncSelectedServiceOfficialPoliciesUids = (updatedSelectedServiceOfficialPoliciesUids: string[]): void => {
    const params: PostServicePoliciesRequest = { service_official_policies_uids: updatedSelectedServiceOfficialPoliciesUids }
    postAdminServicePolicies(params, axiosBaseConfig).then(() => {
      props.setSelectedServiceOfficialPoliciesUids(updatedSelectedServiceOfficialPoliciesUids)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleChangeServiceOfficialPolicyUids = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const uid = e.target.value
    if (props.selectedServiceOfficialPoliciesUids.includes(uid)) {
      const updatedSelectedServiceOfficialPoliciesUids = props.selectedServiceOfficialPoliciesUids.filter((item) => item !== uid)
      syncSelectedServiceOfficialPoliciesUids(updatedSelectedServiceOfficialPoliciesUids)
    } else {
      const updatedSelectedServiceOfficialPoliciesUids = [...props.selectedServiceOfficialPoliciesUids, uid]
      syncSelectedServiceOfficialPoliciesUids(updatedSelectedServiceOfficialPoliciesUids)
    }
  }

  return (
    <Stack
      spacing={4}
    >
      <Heading as="h3" size="lg">利用サービスを選択</Heading>
      <Table
        display={['block', 'table', 'table']}
      >
        <Thead
          display={['block', 'table-header-group', 'table-header-group']}
        >
          <ServicePolicyHeader useCheckbox={true} />
        </Thead>
        <Tbody
          display={['block', 'table-row-group', 'table-row-group']}
        >
          {Object.values(ServiceOfficialPolicies).map((policy) => (
            <ServicePolicyRow
              key={policy.uid}
              {...policy}
              useCheckbox={true}
              selectedServiceOfficialPoliciesUids={props.selectedServiceOfficialPoliciesUids}
              handleChangeServiceOfficialPolicyUids={handleChangeServiceOfficialPolicyUids} />
          ))}
        </Tbody>
      </Table>
    </Stack>
  )
}

export default ServiceSelect
