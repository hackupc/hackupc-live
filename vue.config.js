require('typescript-require')

const CreateFileWebpack = require('create-file-webpack')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/styles';",
      },
    },
  },
  configureWebpack: {
    plugins: [
      new CreateFileWebpack({
        path: './dist/data/',
        fileName: 'schedule.json',
        content: JSON.stringify(require('./src/data/schedule').schedule),
      }),
    ],
  },
}
