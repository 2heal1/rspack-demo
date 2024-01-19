const path = require("path")
const mfConfig = require('./mf.config');
const rspack = require("@rspack/core");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  context: __dirname,
  devtool: false,
  output: {
    path: "./dist",
    clean:true,
    publicPath: process.env.NODE_ENV === 'production' ?
    `//xxxxx/` : 'http://localhost:8082/',
    filename: process.env.NODE_ENV === 'development' ?'[name].js' : '[contenthash].bundle.js',
  },
  resolve:{
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),
    alias:{
      'shared-config': path.resolve(__dirname,'./src/shared-config')
    }
  },
  module: {
    rules:[
      {
        test: /\.tsx$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true
              },
              transform: {
                react: {
                  runtime: "automatic",
                }
              }
            }
          }
        },
        type: "javascript/auto"
      },
    ]
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
			template: "./src/index.html"
		}),
    new rspack.container.ModuleFederationPlugin(mfConfig)
  ],
  devServer: {
    port: 8082,
    devMiddleware: {
      writeToDisk: true,
    },
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':
        'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    }
  },
  optimization:{
    chunkIds: process.env.NODE_ENV ==='development' ?  'named' : 'deterministic'
  }
}
