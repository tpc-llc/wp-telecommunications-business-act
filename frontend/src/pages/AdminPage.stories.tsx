import AdminPage from './AdminPage'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Pages/AdminPage',
  component: AdminPage,
  tags: ['autodocs']
} satisfies Meta<typeof AdminPage>

export default meta

type Story = StoryObj<typeof AdminPage>

export const Default: Story = {
  args: {}
}
