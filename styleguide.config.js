module.exports = {
  components: 'src/components/**/*.js',
  webpackConfig: {
    module: {
      loaders: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        },
        {
          test: /\.(png|jpg|)$/,
          loader: 'url-loader?limit=200000'
        }
      ]
    }
  }
};
