
module.exports = {
  name: "remote2",
  exposes: {
    "./Component": "./src/Component",
    "./Component2": "./src/LazyComponent",
    "./ComponentWithSharedFile": "./src/ComponentWithSharedFile",
  },
  shared: {
    // All (used) requests within lodash are shared.
    "lodash/":{},
    "date-fns":{},
      react: {
        // Do not load our own version.
        // There must be a valid shared module available at runtime.
        // This improves build time as this module doesn't need to be compiled,
        // but it opts-out of possible fallbacks and runtime version upgrade.
        // import: false,
        singleton: true
      },
      "shared-config":{
        import: './src/shared-config',
        version:'1.0.0'
      }
  }
}
