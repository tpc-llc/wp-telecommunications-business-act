/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * PluginEndpoints
 * PluginEndpoints
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getGetAdminPageinfoMock = () => ({service_official_policies_uids: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word())), is_new_user: faker.datatype.boolean()})

export const getGetPublicServicePoliciesMock = () => ({service_official_policies_uids: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))})

export const getPluginEndpointsMSW = () => [
rest.get('*/admin/pageinfo', (_req, res, ctx) => {
        return res(
          ctx.delay(0),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetAdminPageinfoMock()),
        )
      }),rest.post('*/admin/service-policies', (_req, res, ctx) => {
        return res(
          ctx.delay(0),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/public/service-policies', (_req, res, ctx) => {
        return res(
          ctx.delay(0),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetPublicServicePoliciesMock()),
        )
      }),]
