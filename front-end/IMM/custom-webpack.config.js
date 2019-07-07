/* from https://www.techiediaries.com/django-angular-tutorial/ */
const BundleTracker = require('webpack-bundle-tracker');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

/*...*/
module.exports  = {

    "output": {
        "path":  path.resolve('../../back-end/static_content/'),
        "filename": "[name].bundle.js",
        "chunkFilename":  "[id].chunk.js",
        "crossOriginLoading":  false,
        //"publicPath":"http://127.0.0.1:4200/"//1
        "publicPath": '/static/'
    },
    "devServer": {
        "historyApiFallback":  true,
        "publicPath":  "http://127.0.0.1:4200/"//2
    },
    plugins:[
        new BundleTracker({filename: '../../webpack-stats.json'}),
        new CopyPlugin([
          { from: 'src/static/**', 
            to: '../../back-end/static_content/[name].[ext]',
            toType: 'template',
            ignore: 'BRA_adm3.json'}
        ]),
        new HtmlWebpackPlugin(),
        new HtmlWebpackTagsPlugin({
          append: false, links: 'leaflet.css'
        })
    ]
}

