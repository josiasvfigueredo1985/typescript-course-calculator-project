const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Gera um HTML com o bundle
    }),
      // new MiniCssExtractPlugin({
      //       filename: 'scr/assets/css/style.css', // Define onde o CSS será salvo
      //   }),
  ],
  devServer: {
    static: './dist', // Servir arquivos da pasta dist
    port: 3000, // Porta do servidor
    open: true, // Abre o navegador automaticamente
   // compress: true
  },
  mode: 'development' // Modo de desenvolvimento
};
