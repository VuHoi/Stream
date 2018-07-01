 const path=require('path');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const webpack =require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const VENDOR_LIBS=[
      'babel-preset-stage-2',
    
      'react',
      'react-dom',
      // 'react-animations',
      'react-redux',
      'redux'
 ]

 const devServer = {
  port : 4000,
  open : true,
  disableHostCheck : true,
  historyApiFallback : true,
  overlay : true,
  stats : 'minimal',
  inline : true,
  compress : true,
  contentBase : '/'
};
 const config={
  entry:{
    bundle :'./src/index.js',
    vendor:VENDOR_LIBS
  }
      // ,
  // optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			commons: {
	// 				chunks: "initial",
	// 				minChunks: 2,
	// 				maxInitialRequests: 5, // The default limit is too small to showcase the effect
	// 				minSize: 0 // This is example is too small to create commons chunks
	// 			},
	// 			vendor: {
	// 				test: /node_modules/,
	// 				chunks: "initial",
	// 				name: "vendor",
	// 				priority: 10,
	// 				enforce: true
	// 			}
	// 		}
	// 	}
	// }
    ,
  output:{
      path:path.join(__dirname,'dist'),
      filename:'[name].js'
     
  },
  module:{
      rules:[
        {  
             use:'babel-loader',
             test:/\.js$/
        },
        {  
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
            })
       },
       {  
        test: /\.jpe?g$|\.git$\.png$\.svg$\.woff$\.woff2$\.eot$\.tff$\.wav$\.dmp3$\.ico$/,
        loader:"file-loader"
       
       },
       {
        test: /\.(js|jsx)$/,
        include: path.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      }
 // , babelrc
    // "plugins": ["react-hot-loader/babel"]

      ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      '$' : 'jquery',
      'jQuery' : 'jquery',
      'window.$' : 'jquery',
      'window.jQuery' : 'jquery'
  }),

  new HtmlWebpackPlugin({
    template : 'src/index.html'

}),
 


  ],

  devServer
 }

  module.exports=config;