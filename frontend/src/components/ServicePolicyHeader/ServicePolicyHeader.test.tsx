import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/styles'
import ServicePolicyHeader from './ServicePolicyHeader'

test('チェックボックス用ヘッダの表示切り替えができるか', () => {
  render(
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <ServicePolicyHeader showCheckboxHeader={true} />
        </MantineProvider>
  )
  screen.debug()
  expect(screen.getByText('選択')).toBeInTheDocument()
})
