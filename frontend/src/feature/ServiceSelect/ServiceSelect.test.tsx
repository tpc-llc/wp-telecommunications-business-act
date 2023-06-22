import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ServiceSelect from './ServiceSelect'
import { ChakraProvider } from '@chakra-ui/provider'

test('Google Analyticsなどの行が生成されているか', () => {
  const selectedServiceOfficialPoliciesUids: string[] = ['google-analytics']
  render(
    <ChakraProvider>
      <ServiceSelect
        selectedServiceOfficialPoliciesUids={selectedServiceOfficialPoliciesUids}
        setSelectedServiceOfficialPoliciesUids={() => { }}
      />
    </ChakraProvider>
  )
  screen.debug()
  const googleAnalyticsCheckbox = screen.getByDisplayValue('google-analytics')
  expect(googleAnalyticsCheckbox).toBeDefined()
})
