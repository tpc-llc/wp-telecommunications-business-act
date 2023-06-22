import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

import axiosBaseConfig from '../lib/axios-config/axios-config'
import { getAdminPageinfo } from '../lib/plugin/client'
import ServiceSelect from '../feature/ServiceSelect/ServiceSelect'

const ServiceSelectPage: React.FC = () => {
  const [selectedServiceOfficialPoliciesUids, setSelectedServiceOfficialPoliciesUids] = useState<string[]>([]) // 選択されたサービスのuidを格納する配列

  useEffect(() => {
    getAdminPageinfo(axiosBaseConfig).then((res) => {
      console.log(res)
      setSelectedServiceOfficialPoliciesUids(res.data.service_official_policies_uids)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Box
      w={'100%'}
    >
      <ServiceSelect
        selectedServiceOfficialPoliciesUids={selectedServiceOfficialPoliciesUids}
        setSelectedServiceOfficialPoliciesUids={setSelectedServiceOfficialPoliciesUids}
      />
    </Box>
  )
}

export default ServiceSelectPage
