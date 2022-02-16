exports.onPreInit = ({ reporter }) => {
  reporter.info(`Loaded gatsby-plugin-firebase-v9.0`)
}

exports.onCreateWebpackConfig = ({ plugins, actions }, pluginOptions) => {
  const {
    credentials: {
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId
    }
  } = pluginOptions

  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.FIREBASE_API_KEY': JSON.stringify(apiKey),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(authDomain),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(databaseURL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(projectId),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(storageBucket),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(messagingSenderId),
        'process.env.FIREBASE_APP_ID': JSON.stringify(appId),
        'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(measurementId)      
      })
    ]
  })
}
