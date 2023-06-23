import TermsOfService from './TermsOfService'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'Componentss/TermsOfService',
  component: TermsOfService,
  tags: ['autodocs']
} satisfies Meta<typeof TermsOfService>

export default meta

type Story = StoryObj<typeof TermsOfService>

export const Default: Story = {
  args: {
  }
}
