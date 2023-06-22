import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/styles'
import ServiceSelectPage from './ServiceSelectPage'

test('Google Analyticsなどの行が生成されているか', () => {
  render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ServiceSelectPage />
    </MantineProvider>
  )
  screen.debug()
  const googleAnalyticsCheckbox = screen.getByDisplayValue('google-analytics')
  expect(googleAnalyticsCheckbox).toBeDefined()
})
