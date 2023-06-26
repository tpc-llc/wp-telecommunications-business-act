import Usage from './Usage'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
    title: 'Features/Usage',
    component: Usage,
    tags: ['autodocs']
} satisfies Meta<typeof Usage>

export default meta

type Story = StoryObj<typeof Usage>

export const Default: Story = {
    args: {
    }
}
