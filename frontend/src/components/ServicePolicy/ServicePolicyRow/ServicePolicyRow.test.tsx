import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ServicePolicyRow from './ServicePolicyRow'
import { ChakraProvider } from '@chakra-ui/provider'
import { Table } from '@chakra-ui/react'
import { ServiceOfficialPolicies } from '../../../lib/service-policy/ServiceOfficialPolicies'

test('全ての要素が存在する', () => {
  render(
    <ChakraProvider>
      <Table>
        <ServicePolicyRow
          {...ServiceOfficialPolicies['google-analytics']}
          useCheckbox={false}
        />
      </Table>
    </ChakraProvider>
  )
  screen.debug()
  expect(screen.getByText('アクセス解析')).toBeInTheDocument()
  expect(screen.getByText('Google Analytics')).toBeInTheDocument()
})
