import ServicePolicyRow from './ServicePolicyRow'
import { ServiceOfficialPolicies } from '../../../lib/service-policy/ServiceOfficialPolicies'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/ServicePolicyRow',
  component: ServicePolicyRow,
  tags: ['autodocs']
} satisfies Meta<typeof ServicePolicyRow>

export default meta

type Story = StoryObj<typeof ServicePolicyRow>

export const Default: Story = {
  args: {
    ...ServiceOfficialPolicies['google-analytics']
  }
}
