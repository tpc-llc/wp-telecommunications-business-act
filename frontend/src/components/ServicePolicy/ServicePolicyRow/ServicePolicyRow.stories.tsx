import ServicePolicyRow from './ServicePolicyRow'
import { ServiceOfficialPolicies } from '../../../lib/service-policy/ServiceOfficialPolicies'
import { type Meta, type StoryObj } from '@storybook/react'
import { Table, Tbody } from '@chakra-ui/react'

const meta = {
  title: 'Components/ServicePolicyRow',
  component: ServicePolicyRow,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Table>
          <Tbody>
            <Story />
          </Tbody>
        </Table>
      )
    }
  ]
} satisfies Meta<typeof ServicePolicyRow>

export default meta

type Story = StoryObj<typeof ServicePolicyRow>

export const Default: Story = {
  args: {
    ...ServiceOfficialPolicies['google-analytics']
  }
}
