import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

const ServiceSelectPage = React.lazy(
  async () => await import('../pages/ServiceSelectPage')
)

ReactDOM.createRoot(
  document.getElementById('wpbody-content') as HTMLElement
).render(
  <React.StrictMode>
    <ChakraProvider>
      <ServiceSelectPage />
    </ChakraProvider>
  </React.StrictMode>
)
