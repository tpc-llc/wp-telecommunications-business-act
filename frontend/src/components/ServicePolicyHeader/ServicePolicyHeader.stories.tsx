import ServicePolicyHeader from './ServicePolicyHeader'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/ServicePolicyHeader',
  component: ServicePolicyHeader,
  tags: ['autodocs']
} satisfies Meta<typeof ServicePolicyHeader>

export default meta

type Story = StoryObj<typeof ServicePolicyHeader>

export const Default: Story = {
  args: {
  }
}
