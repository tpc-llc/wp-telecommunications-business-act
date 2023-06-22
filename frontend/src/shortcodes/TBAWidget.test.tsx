import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/styles'
import TBAWidget from './TBAWidget'

test('選択済みの行が生成されているか', () => {
  render(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <TBAWidget />
        </MantineProvider>
  )
  screen.debug()
  const googleAnalyticsRow = screen.queryByText('Google Analytics')
  expect(googleAnalyticsRow).toBeDefined()
})

test('選択されていない行が生成されていないか', () => {
  render(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <TBAWidget />
        </MantineProvider>
  )
  screen.debug()
  const notExistsRow = screen.queryByText('Not Exist Service')
  expect(notExistsRow).toBeNull()
})
