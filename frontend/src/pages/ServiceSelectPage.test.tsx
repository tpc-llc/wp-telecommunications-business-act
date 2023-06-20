import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/styles'
import ServiceSelectPage from './ServiceSelectPage'

test('h1要素が存在する', () => {
  render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ServiceSelectPage />
    </MantineProvider>
  )
  screen.debug()
  expect(screen.getByText('Service Select Page')).toBeInTheDocument()
})
