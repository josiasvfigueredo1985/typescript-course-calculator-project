const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/assets/typescript/app.ts', // Arquivo de entrada
  output: {
    filename: 'bundle.js', // Arquivo de saída
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
    clean: true, // Limpa a pasta dist antes de cada build
    publicPath: '/', // Garante que os arquivos sejam servidos corretamente

  },
  resolve: {
    extensions: ['.ts', '.js'] // Extensões suportadas
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplica o loader em arquivos .ts
        use: 'ts-loader', // Utiliza o ts-loader para transpilar TypeScript e MiniCssExtractPlugin.loader, css-loader para CSS
        exclude: /node_modules/
      }, {
        test: /\.css$/, // Aplica o css-loader e MiniCssExtractPlugin apenas em arquivos .css
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(mp3)$/, // Para arquivos de fontes e áudio
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Mantém o caminho original
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Gera um HTML com o bundle
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css', // Define onde o CSS será salvo
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/css', to: 'assets/css' },
        { from: 'src/assets/fonts', to: 'assets/fonts' },
        { from: 'src/assets/images', to: 'assets/images' },
        { from: 'src/assets/scss', to: 'assets/scss' },
        { from: 'src/assets/sounds', to: 'assets/sounds' },
      ],
    }),
  ],
  devServer: {
    static: './dist', // Servir arquivos da pasta dist
    port: 3000, // Porta do servidor
    open: true, // Abre o navegador automaticamente
    historyApiFallback: true,
    compress: true
  },
  mode: 'development' // Modo de desenvolvimento
};
