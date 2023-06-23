import Register from './Register'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Features/Register',
  component: Register,
  tags: ['autodocs']
} satisfies Meta<typeof Register>

export default meta

type Story = StoryObj<typeof Register>

export const Default: Story = {
  args: {
    email: 'admin@admin.com'
  }
}
