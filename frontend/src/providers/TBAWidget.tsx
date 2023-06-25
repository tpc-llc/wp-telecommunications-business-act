import React from 'react'
import { ChakraProvider } from '@chakra-ui/provider'
import ReactDOM from 'react-dom/client'
import theme from '../theme'

const TBAWidget = React.lazy(
  async () => await import('../shortcodes/TBAWidget')
)

ReactDOM.createRoot(
  document.getElementById('wptba-root') as HTMLElement
).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <TBAWidget />
    </ChakraProvider>
  </React.StrictMode>
)
