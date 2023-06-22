import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ServicePolicyHeader from './ServicePolicyHeader'
import { ChakraProvider } from '@chakra-ui/provider'

test('チェックボックス用ヘッダの表示切り替えができるか', () => {
  render(
    <ChakraProvider>
      <ServicePolicyHeader />
    </ChakraProvider>
  )
  screen.debug()
  expect(screen.getByText('選択')).toBeInTheDocument()
})
