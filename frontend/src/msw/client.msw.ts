import {
    rest
} from 'msw'

export const getGetAdminPageinfoMock = () => ({
    service_official_policies_uids: ['google-analytics'],
    is_new_user: false,
})

export const getGetPublicServicePoliciesMock = () => ({ service_official_policies_uids: ['google-analytics'] })

export const getPluginEndpointsMSW = () => [
    rest.get('*/admin/pageinfo', (_req, res, ctx) => {
        return res(
            ctx.delay(0),
            ctx.status(200, 'Mocked status'),
            ctx.json(getGetAdminPageinfoMock()),
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
