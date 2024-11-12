import React from 'react'
import { render, screen } from '@testing-library/react'
import { NameProvider, NameConsumer } from '../react-context'

describe('NameContext', () => {
    it('provides the full name to the consumer', () => {
        const { getByText } = render(
            <NameProvider first="John" last="Doe">
                <NameConsumer />
            </NameProvider>
        )
        expect(getByText('My Name Is: John Doe')).toBeInTheDocument()

        expect(screen.queryByText('My Name Is: Unknown')).not.toBeInTheDocument()
    })

    it('uses default value when no provider is present', () => {
        const { getByText } = render(<NameConsumer />)
        expect(getByText('My Name Is: Unknown')).toBeInTheDocument()
    })
})