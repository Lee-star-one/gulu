const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        includePaths: [path.join(__dirname, 'assets/css')]
      },
    }
  },
}