import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import theme from '../theme'

const AdminPage = React.lazy(
  async () => await import('../pages/AdminPage')
)

ReactDOM.createRoot(
  document.getElementById('wpbody-content') as HTMLElement
).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <AdminPage />
    </ChakraProvider>
  </React.StrictMode>
)
