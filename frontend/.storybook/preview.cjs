import { initialize, mswLoader } from 'msw-storybook-addon';
import { getPluginEndpointsMSW } from '../src/msw/client.msw'

// Initialize MSW
initialize();

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    msw: {
      handlers: getPluginEndpointsMSW()
    }
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
}

export default preview