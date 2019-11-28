module.exports = {
    devServer: {
      proxy:{
        '/api': {
          target: 'https://backend-bikex.herokuapp.com/',
          ws: true,
          changeOrigin: true
        },
        '/':{
          target: "https://api.razorpay.com/"
        }
      }
    }
  }