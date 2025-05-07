const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://buildabot-gfmy--8081--4d9fd228.local-credentialless.webcontainer.io',
      },
    },
  },
});
