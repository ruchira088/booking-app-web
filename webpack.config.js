const path = require("path")

module.exports = {
    entry: path.join(__dirname, "app", "app.jsx"),
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$|.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
}