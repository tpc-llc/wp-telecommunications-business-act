import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ServiceSelectPage from './ServiceSelectPage'

test('h1要素が存在する', () => {
    render(<ServiceSelectPage />)
    screen.debug()
    expect(screen.getByText('Service Select Page')).toBeInTheDocument()
})