const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },

    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }) 
    ],

    devServer:{
        port:5000
    }
}