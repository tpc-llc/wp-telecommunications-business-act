import AdminPage from './AdminPage'
import { type Meta, type StoryObj } from '@storybook/react'
import { rest } from 'msw'

const meta = {
  title: 'Pages/AdminPage',
  component: AdminPage,
  tags: ['autodocs']
} satisfies Meta<typeof AdminPage>

export default meta

type Story = StoryObj<typeof AdminPage>

export const Default: Story = {
  args: {}
}

export const UserUnregistered: Story = {
  args: {}
}
UserUnregistered.parameters = {
  msw: {
    handlers: [
      rest.get('*/admin/pageinfo', async (_, res, ctx) => {
        return await res(
          ctx.status(200),
          ctx.json({
            is_new_user: true,
            current_user_email: 'admin@admin.com',
            service_official_policies_uids: []
          })
        )
      })
    ]
  }
}

export const UserRegistered: Story = {
  args: {}
}
UserRegistered.parameters = {
  msw: {
    handlers: [
      rest.patch('*/admin/email-optin', async (_req, res, ctx) => {
        return await res(
          ctx.delay(0),
          ctx.status(200, 'Mocked status')
        )
      }),
      rest.get('*/admin/pageinfo', async (_, res, ctx) => {
        return await res(
          ctx.status(200),
          ctx.json({
            is_new_user: false,
            current_user_email: 'admin@admin.com',
            service_official_policies_uids: ['google-analytics']
          })
        )
      })
    ]
  }
}
