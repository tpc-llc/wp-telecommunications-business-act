import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ServicePolicyRow from './ServicePolicyRow'
import { ChakraProvider } from '@chakra-ui/provider'
import { ServiceOfficialPolicies } from '../../lib/service-policy/ServiceOfficialPolicies'

test('全ての要素が存在する', () => {
  render(
    <ChakraProvider>
      <ServicePolicyRow
        {...ServiceOfficialPolicies['google-analytics']}
      />
    </ChakraProvider>
  )
  screen.debug()
  expect(screen.getByText('アクセス解析')).toBeInTheDocument()
  expect(screen.getByText('Google Analytics')).toBeInTheDocument()
})
