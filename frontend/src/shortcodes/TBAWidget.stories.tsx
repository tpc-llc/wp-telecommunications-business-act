import TBAWidget from './TBAWidget'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
    title: 'Shortcodes/TBAWidget',
    component: TBAWidget,
    tags: ['autodocs']
} satisfies Meta<typeof TBAWidget>

export default meta

type Story = StoryObj<typeof TBAWidget>

export const Default: Story = {
    args: {}
}
