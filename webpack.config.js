const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
},
devServer: {
    contentBase: './dist'
},
plugins: [
    new HtmlWebpackPlugin({
       filename: 'index.html',
       template: './src/index.html' 
    })
],
module:{
    rules:[

        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ["@babel/preset-env"],
                }
            }
        },
//STT: 3 -------------------------------------------------------------------------------------------------------------------------------------------
//css-loader , MiniCssExtractPlugin
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    
                },
                {
                    loader: "css-loader"
                }
            ]
        }    

    ]
},

plugins: [

    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  
  ]

}