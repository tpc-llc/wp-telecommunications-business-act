import React, { useEffect, useState } from 'react'
import { Box, Flex, Spinner } from '@chakra-ui/react'

import axiosBaseConfig from '../lib/axios-config/axios-config'
import { getAdminPageinfo } from '../lib/plugin/client'
import ServiceSelect from '../feature/ServiceSelect/ServiceSelect'
import EnvironmentCheck from '../feature/EnvironmentCheck/EnvironmentCheck'
import Register from '../feature/Register/Register'

const AdminPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true) // ローディング中はtrueになる
  const [isApiUnavailable, setIsApiUnavailable] = useState<boolean>(false) // APIが利用できない場合はtrueになる
  const [isNewUser, setIsNewUser] = useState<boolean>(false) // 新規ユーザーの場合はtrueになる
  const [email, setEmail] = useState<string>('') // ログイン中のユーザーのメールアドレス
  const [selectedServiceOfficialPoliciesUids, setSelectedServiceOfficialPoliciesUids] = useState<string[]>([]) // 選択されたサービスのuidを格納する配列

  useEffect(() => {
    getAdminPageinfo(axiosBaseConfig).then((res) => {
      setIsApiUnavailable(false)
      setIsNewUser(res.data.is_new_user)
      setEmail(res.data.current_user_email)
      setLoading(false)
      setSelectedServiceOfficialPoliciesUids(res.data.service_official_policies_uids)
    }).catch(() => {
      setIsApiUnavailable(true)
      setLoading(false)
    })
  }, [])

  return (
    <Box
      w={'100%'}
      p={8}
    >
      {loading && (
        <Flex w={'100%'} justify={'center'}>
          <Spinner />
        </Flex>
      )}
      {!loading && isApiUnavailable && (
        <EnvironmentCheck />
      )}
      {!loading && !isApiUnavailable && isNewUser && (
        <Register
          email={email}
        />
      )}
      {!loading && !isApiUnavailable && !isNewUser && (
        <ServiceSelect
          selectedServiceOfficialPoliciesUids={selectedServiceOfficialPoliciesUids}
          setSelectedServiceOfficialPoliciesUids={setSelectedServiceOfficialPoliciesUids}
        />
      )}
    </Box>
  )
}

export default AdminPage
