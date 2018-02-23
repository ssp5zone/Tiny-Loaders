module.exports = {
  entry: './public/app/main-almond.js',
  output: {
    // weird issue, without __dirname doesn't work
    path: __dirname + "/dist/webpack",
    filename: 'build.js',
  },
  resolve: {
    alias: {
      // weird issue, without __dirname doesn't work
      "Block":  __dirname + "/public/app/amd/Block.js",
      // Notice, no resolution for jquery required, cause
      // by default it searches an unspecified module in "/node_modules/<mod-name>/index.js"
    }
  },
  module: {
    // rules are only necessary if you want to skip the 
    // the "loader-name!" part in require().
    rules: [
      {
        // you can always use "css!file/path.css" inside require() and skip this
        test: /\.css$/,
        use: [
          'style-loader', // have to be npm install style-loader
          'css-loader' // have to be npm install css-loader
        ]
      },
      {
        // this is required because bootstrap.js internally uses fonts
         test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
         use: [
           'file-loader' // have to be npm install file-loader
         ]
       }
      // notice we did not give any rule for "html-loader"
      // cause we are explicity calling it using "!" syntax when required
    ],
  },   
  // the following is required because we didn't want to disturb
  // the curl.js loader name "text". Otherwise not needed
  resolveLoader: {
    alias: {
        // provides an alias name for the loader
        'text': 'html-loader', // have to be npm install html-loader
    },
  },
};
