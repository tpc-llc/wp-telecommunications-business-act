import React from 'react'
import {
  Tr,
  Th,
  Text,
  Flex
} from '@chakra-ui/react'

export interface ServicePolicyHeaderProps {
  useCheckbox: boolean
}

export const ServicePolicyHeader: React.FC<ServicePolicyHeaderProps> = (props: ServicePolicyHeaderProps) => {
  const tableHeader: string = '#EDF2F7 !important;'
  return (
    <>
      <Tr
        display={['table-row', 'table-row', 'table-row']}
      >
        {props.useCheckbox && (
          <Th
            display={['block', 'table-cell', 'table-cell']}
            background={tableHeader}
            px={4}
            py={4}
            border={'none'}
            verticalAlign={'middle'}
          >
            <Flex
              justify={'center'}
              align={'center'}
            >
              <Text>利用中</Text>
            </Flex>
          </Th>
        )}
        <Th
          display={['block', 'table-cell', 'table-cell']}
          background={tableHeader}
          px={4}
          py={4}
          border={'none'}
          verticalAlign={'middle'}
        ><Text>分類</Text></Th>
        <Th
          display={['block', 'table-cell', 'table-cell']}
          background={tableHeader}
          px={4}
          py={4}
          border={'none'}
          verticalAlign={'middle'}
        ><Text>企業名</Text></Th>
        <Th
          display={['block', 'table-cell', 'table-cell']}
          background={tableHeader}
          px={4}
          py={4}
          border={'none !important'}
          verticalAlign={'middle'}
        ><Text>サービス名</Text></Th>
        <Th
          display={['block', 'table-cell', 'table-cell']}
          background={tableHeader}
          px={4}
          py={4}
          border={'none'}
          verticalAlign={'middle'}
        ><Text>オプトアウト</Text></Th>
        <Th
          display={['block', 'table-cell', 'table-cell']}
          background={tableHeader}
          px={4}
          py={4}
          border={'none'}
          verticalAlign={'middle'}
        ><Text>プライバシーポリシー</Text></Th>
        <Th
          display={['block', 'table-cell', 'table-cell']}
          background={tableHeader}
          px={4}
          py={4}
          border={'none'}
          verticalAlign={'middle'}
        ><Text>外部送信情報など</Text></Th>
      </Tr>
    </>
  )
}

export default ServicePolicyHeader
