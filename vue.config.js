module.exports = {
  outputDir: "./built",
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
  }
}
