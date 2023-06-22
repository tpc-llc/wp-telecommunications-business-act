import { setupServer } from 'msw/node'
import { getPluginEndpointsMSW } from './client.msw'
export const server = setupServer(...getPluginEndpointsMSW())
