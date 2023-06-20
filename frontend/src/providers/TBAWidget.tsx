import React from 'react'
import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'

const TBAWidget = React.lazy(
  async () => await import('../shortcodes/TBAWidget')
)

ReactDOM.createRoot(
  document.getElementById('wptba-root') as HTMLElement
).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TBAWidget />
    </MantineProvider>
  </React.StrictMode>
)
