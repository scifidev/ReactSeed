const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/helloWorld.jsx",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ['babel-plugin-transform-react-jsx']
                    }
                }
            },
            {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
            }]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
};