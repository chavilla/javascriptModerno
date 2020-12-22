
const path=require('path');

module.exports={
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist')
    },
    mode: 'development',
    devServer:{
        contentBase: path.join(__dirname, '/'),
        compress:true,
        port:9000
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
}