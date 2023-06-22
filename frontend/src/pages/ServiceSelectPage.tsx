import React, { useEffect, useState } from 'react'
import {
  Box,
  Table,
  Tbody,
  Thead
} from '@chakra-ui/react'
import { ServiceOfficialPolicies } from '../lib/service-policy/ServiceOfficialPolicies'
import ServicePolicyHeader from '../components/ServicePolicy/ServicePolicyHeader/ServicePolicyHeader'
import ServicePolicyRow from '../components/ServicePolicy/ServicePolicyRow/ServicePolicyRow'

import axiosBaseConfig from '../lib/axios-config/axios-config'
import { getAdminPageinfo, postAdminServicePolicies } from '../lib/plugin/client'
import { type PostServicePoliciesRequest } from '../lib/plugin/client.schemas'

const ServiceSelectPage: React.FC = () => {
  const [selectedServiceOfficialPoliciesUids, setSelectedServiceOfficialPoliciesUids] = useState<string[]>([]) // 選択されたサービスのuidを格納する配列

  useEffect(() => {
    getAdminPageinfo(axiosBaseConfig).then((res) => {
      setSelectedServiceOfficialPoliciesUids(res.data.service_official_policies_uids)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const syncSelectedServiceOfficialPoliciesUids = (updatedSelectedServiceOfficialPoliciesUids: string[]): void => {
    const params: PostServicePoliciesRequest = { service_official_policies_uids: updatedSelectedServiceOfficialPoliciesUids }
    postAdminServicePolicies(params, axiosBaseConfig).then(() => {
      setSelectedServiceOfficialPoliciesUids(updatedSelectedServiceOfficialPoliciesUids)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleChangeServiceOfficialPolicyUids = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const uid = e.target.value
    if (selectedServiceOfficialPoliciesUids.includes(uid)) {
      const updatedSelectedServiceOfficialPoliciesUids = selectedServiceOfficialPoliciesUids.filter((item) => item !== uid)
      syncSelectedServiceOfficialPoliciesUids(updatedSelectedServiceOfficialPoliciesUids)
    } else {
      const updatedSelectedServiceOfficialPoliciesUids = [...selectedServiceOfficialPoliciesUids, uid]
      syncSelectedServiceOfficialPoliciesUids(updatedSelectedServiceOfficialPoliciesUids)
    }
  }

  return (
    <Box>
      <Box
        w={'100%'}
      >

        <Table>
          <Thead>
            <ServicePolicyHeader useCheckbox={true} />
          </Thead>
          <Tbody>
            {Object.values(ServiceOfficialPolicies).map((policy) => (
              <ServicePolicyRow
                key={policy.uid}
                {...policy}
                useCheckbox={true}
                selectedServiceOfficialPoliciesUids={selectedServiceOfficialPoliciesUids}
                handleChangeServiceOfficialPolicyUids={handleChangeServiceOfficialPolicyUids} />
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default ServiceSelectPage
