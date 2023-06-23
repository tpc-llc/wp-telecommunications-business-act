import ListSelectedService from './ListSelectedService'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Features/ListSelectedService',
  component: ListSelectedService,
  tags: ['autodocs']
} satisfies Meta<typeof ListSelectedService>

export default meta

type Story = StoryObj<typeof ListSelectedService>

export const Default: Story = {
  args: {}
}
