import React from 'react'
import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

const ServiceSelectPage = React.lazy(
  async () => await import('../pages/ServiceSelectPage')
)

ReactDOM.createRoot(
  document.getElementById('wpbody-content') as HTMLElement
).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ServiceSelectPage />
    </MantineProvider>
  </React.StrictMode>
)
