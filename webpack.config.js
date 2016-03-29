module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        contentBase: './dist',
        host: "0.0.0.0",
        port: "8000"
    }
};