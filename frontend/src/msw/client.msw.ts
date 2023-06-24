import {
    rest
} from 'msw'

export const getGetAdminPageinfoMock = () => ({
    service_official_policies_uids: ['google-analytics'],
    is_new_user: false,
    current_user_email: 'example@example.com'
})

export const getGetPublicServicePoliciesMock = () => ({ service_official_policies_uids: ['google-analytics'] })

export const getPluginEndpointsMSW = () => [
    rest.patch('*/admin/email-optin', (_req, res, ctx) => {
        return res(
            ctx.delay(0),
            ctx.status(200, 'Mocked status'),
        )
    }), rest.get('*/admin/pageinfo', (_req, res, ctx) => {
        return res(
            ctx.delay(0),
            ctx.status(200, 'Mocked status'),
            ctx.json(getGetAdminPageinfoMock()),
        )
    }), rest.post('*/admin/register', (_req, res, ctx) => {
        return res(
            ctx.delay(0),
            ctx.status(200, 'Mocked status'),
        )
    }), rest.post('*/admin/service-policies', (_req, res, ctx) => {
        return res(
            ctx.delay(0),
            ctx.status(200, 'Mocked status'),
        )
    }), rest.get('*/public/service-policies', (_req, res, ctx) => {
        return res(
            ctx.delay(0),
            ctx.status(200, 'Mocked status'),
            ctx.json(getGetPublicServicePoliciesMock()),
        )
    }),]
