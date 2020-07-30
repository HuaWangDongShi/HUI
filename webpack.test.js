const webpack = require('webpack')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
})



const webpackConfig = {
  devtool: '#inline-source-map',
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: false,
          },
        }, 'sass-loader'],
        // include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",

            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')({root: loader.resourcePath}),
                require('postcss-preset-env')(),
                require('tailwindcss')('./tailwind.config.js'),
                require('cssnano')({
                  preset: 'default',
                }),
                ...process.env.NODE_ENV === 'production'
                  ? [purgecss]
                  : []
              ]
            }

            // options: {
            //   importLoaders: 1,
            //   modules: false,
            //   /*Enable Source Maps*/
            //   sourceMap: true,
            //   /*Set postcss.config.js config path && ctx*/
            //
            //   config: {
            //     path: "./.storybook/",
            //   },
            // },
          },
        ],
        // options: {
        //   importLoaders: 1,
        //   modules: false,
        //   /*Enable Source Maps*/
        //   sourceMap: true,
        //   /*Set postcss.config.js config path && ctx*/
        //
        //   config: {
        //     path: "./.storybook/",
        //   },
        // },
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  node:{
    fs: 'empty'
  }
};


module.exports = webpackConfig
