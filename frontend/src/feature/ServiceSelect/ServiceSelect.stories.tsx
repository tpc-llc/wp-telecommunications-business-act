import ServiceSelect from './ServiceSelect'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Features/ServiceSelect',
  component: ServiceSelect,
  tags: ['autodocs']
} satisfies Meta<typeof ServiceSelect>

export default meta

type Story = StoryObj<typeof ServiceSelect>

export const Default: Story = {
  args: {
    selectedServiceOfficialPoliciesUids: ['google-analytics'],
    setSelectedServiceOfficialPoliciesUids: () => { }
  }
}
