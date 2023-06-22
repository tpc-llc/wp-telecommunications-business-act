import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Checkbox
} from '@chakra-ui/react'
import ServicePolicyHeader from '../components/ServicePolicy/ServicePolicyHeader/ServicePolicyHeader'
import ServicePolicyRow from '../components/ServicePolicy/ServicePolicyRow/ServicePolicyRow'
import { ServiceOfficialPolicies } from '../lib/service-policy/ServiceOfficialPolicies'
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
        <ServicePolicyHeader />
        {Object.values(ServiceOfficialPolicies).map((policy) => (
          <Flex
            key={policy.uid}
          >
            <Flex
            >
              <Flex
              >
                <Checkbox
                  isChecked={selectedServiceOfficialPoliciesUids.includes(policy.uid)}
                  value={policy.uid}
                  onChange={handleChangeServiceOfficialPolicyUids} />
              </Flex>
            </Flex>
            <ServicePolicyRow
              {...policy} />
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default ServiceSelectPage
