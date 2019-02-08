process.env.VUE_APP_CONFIG = JSON.stringify(require('./env.json'))
module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true
  }
}
