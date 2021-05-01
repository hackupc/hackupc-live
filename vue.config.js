module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/live/params.scss";
        `,
      },
    },
  },
}
