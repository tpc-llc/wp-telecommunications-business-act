import ServiceSelectPage from './ServiceSelectPage'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Pages/ServiceSelectPage',
  component: ServiceSelectPage,
  tags: ['autodocs']
} satisfies Meta<typeof ServiceSelectPage>

export default meta

type Story = StoryObj<typeof ServiceSelectPage>

export const Default: Story = {
  args: {}
}
