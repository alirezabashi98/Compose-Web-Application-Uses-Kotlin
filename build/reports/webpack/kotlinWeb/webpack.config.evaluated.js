{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/alireza/IdeaProjects/kotlinWeb/build/js/packages/kotlinWeb/kotlin/kotlinWeb.js'
    ]
  },
  output: {
    path: '/home/alireza/IdeaProjects/kotlinWeb/build/distributions',
    filename: [Function: filename],
    library: 'kotlinWeb',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    open: true,
    contentBase: [
      '/home/alireza/IdeaProjects/kotlinWeb/build/processedResources/js/main'
    ]
  }
}