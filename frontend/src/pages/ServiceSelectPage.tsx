import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Checkbox,
  Divider
} from '@mantine/core'
import ServicePolicyHeader from '../components/ServicePolicyHeader/ServicePolicyHeader'
import ServicePolicyRow from '../components/ServicePolicyRow/ServicePolicyRow'
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

  const syncSelectedServiceOfficialPoliciesUids = (): void => {
    const params: PostServicePoliciesRequest = { service_official_policies_uids: selectedServiceOfficialPoliciesUids }
    postAdminServicePolicies(params, axiosBaseConfig).then(() => { }).catch((err) => {
      console.log(err)
    })
  }

  const handleChangeServiceOfficialPolicyUids = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const uid = e.target.value
    selectedServiceOfficialPoliciesUids.includes(uid)
      ? setSelectedServiceOfficialPoliciesUids(selectedServiceOfficialPoliciesUids.filter((item) => item !== uid))
      : setSelectedServiceOfficialPoliciesUids([...selectedServiceOfficialPoliciesUids, uid])
    syncSelectedServiceOfficialPoliciesUids()
  }

  return (
    <Box>
      <Box
        w={'100%'}
      >
        <ServicePolicyHeader showCheckboxHeader={true} />
        {Object.values(ServiceOfficialPolicies).map((policy) => (
          <Flex
            key={policy.uid}
          >
            <Flex
              sx={{
                marginRight: '12px'
              }}
            >
              <Flex
                w={'48px'}
                justify={'center'}>
                <Checkbox
                  checked={selectedServiceOfficialPoliciesUids.includes(policy.uid)}
                  value={policy.uid}
                  onChange={handleChangeServiceOfficialPolicyUids} />
              </Flex>
              <Divider orientation="vertical" />
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
