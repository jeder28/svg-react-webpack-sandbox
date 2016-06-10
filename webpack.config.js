const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: getEntrySources(['./index.jsx']),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/bundle.js'
    },
    devtool: 'eval',
    module: {
        preLoaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'source-map'
            }
        ],
        loaders: [
            {
              test: /\.scss$/,
              loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: [
                  'react-hot',
                  'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
              ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'] //Makes imports without extensions possible.
    },
    postcss: () => {
      return [precss, autoprefixer];
    }
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}
