module.exports = {
  cache: {
    cacheId: "demo-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "demo-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
