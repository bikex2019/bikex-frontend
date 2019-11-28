module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https//immense-chamber-94004.herokuapp.com',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }