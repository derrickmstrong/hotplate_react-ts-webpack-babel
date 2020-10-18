// note: this format const var_name = require('pathname') is how you import in es5
const path = require('path'),
  // const rules says any files that ends in tsx exclude it apart from node_modules files and use babel to load it
  // note: if you want webpack to read css and images you will add a rule to it here as well
  rules = [
    {
      test: /|.tsx?/, // regex for all the files that end in this format
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ];

// module.export is essentially the same as exports but for Node
module.exports = {
  target: 'web', // target that we want to export our code to ie. web, native-app
  mode: 'development', // ie. development mode, production mode
  entry: './src/index.tsx', // entry file where main js will be in
  output: {
    path: path.resolve(__dirname, 'build'), // creates a new folder in root directory called build and put all the compiled/minified code inside
    filename: 'bundle.js', // name where webpack should output js file
  },
  module: {
      rules
  }, 
  // Omits the file types at the end of the file when we import something into node
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }, 
  // Webpack dev server will take content from root and export it to 5000
  devServer: {
    contentBase: './',
    port: 5000,
  },
};