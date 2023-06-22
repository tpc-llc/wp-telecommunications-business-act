module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm", "@chakra-ui/storybook-addon"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true,
    "emotionAlias": false
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../public']
};