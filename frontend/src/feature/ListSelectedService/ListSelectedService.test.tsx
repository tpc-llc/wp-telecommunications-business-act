import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ListSelectedService from './ListSelectedService'
import { ChakraProvider } from '@chakra-ui/provider'

test('選択済みの行が生成されているか', () => {
  render(
    <ChakraProvider>
      <ListSelectedService />
    </ChakraProvider>
  )
  screen.debug()
  const googleAnalyticsRow = screen.queryByText('Google Analytics')
  expect(googleAnalyticsRow).toBeDefined()
})

test('選択されていない行が生成されていないか', () => {
  render(
    <ChakraProvider>
      <ListSelectedService />
    </ChakraProvider>
  )
  screen.debug()
  const notExistsRow = screen.queryByText('Not Exist Service')
  expect(notExistsRow).toBeNull()
})
