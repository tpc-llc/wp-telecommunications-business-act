import ServicePolicyHeader from './ServicePolicyHeader'
import { type Meta, type StoryObj } from '@storybook/react'
import { Table, Thead } from '@chakra-ui/react'

const meta = {
  title: 'Components/ServicePolicyHeader',
  component: ServicePolicyHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Table>
          <Thead>
            <Story />
          </Thead>
        </Table>
      )
    }
  ]
} satisfies Meta<typeof ServicePolicyHeader>

export default meta

type Story = StoryObj<typeof ServicePolicyHeader>

export const Default: Story = {
  args: {
  }
}
