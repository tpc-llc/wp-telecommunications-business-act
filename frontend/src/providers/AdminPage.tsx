import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

const AdminPage = React.lazy(
  async () => await import('../pages/AdminPage')
)

ReactDOM.createRoot(
  document.getElementById('wpbody-content') as HTMLElement
).render(
  <React.StrictMode>
    <ChakraProvider>
      <AdminPage />
    </ChakraProvider>
  </React.StrictMode>
)
