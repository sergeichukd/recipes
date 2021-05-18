var path = require("path");

module.exports = {
  entry: {
    vendors: "./src/vendors.js",
    app: "./src/App.js",
  }, // входная точка - исходный файл
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "./public"), // путь к каталогу выходных файлов - папка public
    publicPath: "/public/",
    filename: "[name].js", // название создаваемого файла
  },
  devServer: {
    historyApiFallback: true,
    port: 8081,
    open: true,
  },
  module: {
    rules: [
      //загрузчик для jsx
      {
        test: /\.js.?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"], // используемые плагины
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
      {
        test: /\.jpg$/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff",
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/octet-stream",
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/svg+xml",
        },
      },
    ],
  },
};
