const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return {
    // Входной файл
    entry: ["./src/js/index.js"],

    // Выходной файл
    output: {
      filename: "./js/bundle.js"
    },

    // Source maps для удобства отладки
    devtool: "source-map",

    module: {
      rules: [
        // Транспилируем js с babel
        {
          test: /\.js$/,
          include: path.resolve(__dirname, "src/js"),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        },

        // Компилируем SCSS в CSS
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, // Extract css to separate file
            {
              loader: "css-loader",
              options: {
                sourceMap: argv.mode === "development"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: argv.mode === "development"
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: argv.mode === "development"
              }
            }
          ]
        },

        // Подключаем шрифты из css
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader?name=./fonts/[name].[ext]"
            }
          ]
        },

        // Подключаем картинки из css
        {
          test: /\.(svg|png|jpg|jpeg|webp)$/,
          use: [
            {
              loader: "file-loader?name=./static/[name].[ext]"
            }
          ]
        }
      ]
    },
    plugins: [
      // Подключаем файл html, стили и скрипты встроятся автоматически
      new HtmlWebpackPlugin({
        title: "CPS",
        template: "./src/index.html",
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: false
        }
      }),

      // Кладем стили в отдельный файлик
      new MiniCssExtractPlugin({
        filename: "style.css"
      }),

      // Копируем картинки
      new CopyWebpackPlugin([
        {
          from: "./src/img",
          to: "img"
        }
      ])
    ]
  };
};
