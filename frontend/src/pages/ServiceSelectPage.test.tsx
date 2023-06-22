import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ServiceSelectPage from './ServiceSelectPage'
import { ChakraProvider } from '@chakra-ui/provider'

test('Google Analyticsなどの行が生成されているか', () => {
  render(
    <ChakraProvider>
      <ServiceSelectPage />
    </ChakraProvider>
  )
  screen.debug()
  const googleAnalyticsCheckbox = screen.getByDisplayValue('google-analytics')
  expect(googleAnalyticsCheckbox).toBeDefined()
})
