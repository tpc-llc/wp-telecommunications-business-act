import Register from './Register'
import { type Meta, type StoryObj } from '@storybook/react'
import { rest } from 'msw'

const meta = {
  title: 'Features/Register',
  component: Register,
  tags: ['autodocs']
} satisfies Meta<typeof Register>

export default meta

type Story = StoryObj<typeof Register>

export const Default: Story = {
  args: {
    email: 'admin@admin.com'
  }
}

export const ButtonLoadingAndError: Story = {
  args: {
    email: 'error@error.com'
  }
}
ButtonLoadingAndError.parameters = {
  msw: {
    handlers: [
      rest.post('*/admin/register', async (_req, res, ctx) => {
        return await res(
          ctx.delay(1000),
          ctx.status(400, 'Bad Request')
        )
      })
    ]
  }
}
