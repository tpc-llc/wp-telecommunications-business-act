import SwitchOptin from './SwitchOptin'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Features/SwitchOptin',
  component: SwitchOptin,
  tags: ['autodocs']
} satisfies Meta<typeof SwitchOptin>

export default meta

type Story = StoryObj<typeof SwitchOptin>

export const Default: Story = {
  args: {
    emailOptin: true
  }
}
