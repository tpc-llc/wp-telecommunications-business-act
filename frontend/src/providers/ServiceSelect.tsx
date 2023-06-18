import React from 'react'
import ReactDOM from 'react-dom/client'

const ServiceSelectPage = React.lazy(
    async () => await import('../pages/ServiceSelectPage')
)

ReactDOM.createRoot(
    document.getElementById('wpbody-content') as HTMLElement
).render(
    <React.StrictMode>
        <ServiceSelectPage />
    </React.StrictMode>
)
