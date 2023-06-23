import EnvironmentCheck from './EnvironmentCheck'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Features/EnvironmentCheck',
  component: EnvironmentCheck,
  tags: ['autodocs']
} satisfies Meta<typeof EnvironmentCheck>

export default meta

type Story = StoryObj<typeof EnvironmentCheck>

export const Default: Story = {
  args: {}
}
