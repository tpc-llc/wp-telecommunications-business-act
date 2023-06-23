import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AdminPage from './AdminPage'
import { ChakraProvider } from '@chakra-ui/provider'

test('Google Analyticsなどの行が生成されているか', () => {
  render(
    <ChakraProvider>
      <AdminPage />
    </ChakraProvider>
  )
  screen.debug()
  const googleAnalyticsCheckbox = screen.getByDisplayValue('google-analytics')
  expect(googleAnalyticsCheckbox).toBeDefined()
})
