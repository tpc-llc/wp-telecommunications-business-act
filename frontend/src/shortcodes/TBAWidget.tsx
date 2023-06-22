import React, { useEffect, useState } from 'react'
import {
  Box
} from '@chakra-ui/react'
import ServicePolicyHeader from '../components/ServicePolicy/ServicePolicyHeader/ServicePolicyHeader'
import ServicePolicyRow from '../components/ServicePolicy/ServicePolicyRow/ServicePolicyRow'
import { ServiceOfficialPolicies } from '../lib/service-policy/ServiceOfficialPolicies'
import axiosBaseConfig from '../lib/axios-config/axios-config'
import { getPublicServicePolicies } from '../lib/plugin/client'

const TBAWidget: React.FC = () => {
  const [selectedServiceOfficialPoliciesUids, setSelectedServiceOfficialPoliciesUids] = useState<string[]>([]) // 選択されたサービスのuidを格納する配列

  useEffect(() => {
    getPublicServicePolicies(axiosBaseConfig).then((res) => {
      setSelectedServiceOfficialPoliciesUids(res.data.service_official_policies_uids)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Box>
      <ServicePolicyHeader />
      {selectedServiceOfficialPoliciesUids.map((uid) => {
        return (
          <ServicePolicyRow
            key={uid}
            {...ServiceOfficialPolicies[uid]} />)
      })
      }
    </Box>
  )
}

export default TBAWidget
