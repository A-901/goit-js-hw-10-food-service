const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer],
  rules: [
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'url-loader?limit=10000',
        'img-loader'
      ]      
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'postcss-loader'],
    },
    {
      test: /\.jsx?$/,
      use: ['babel-loader', 'astroturf/loader'],
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" 
  },
  

  ]
};
