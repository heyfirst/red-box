const commonConfig = {
  isProduction: false,
  port: 3000,
  baseURL: 'https://graphql.api.local'
}

const environmentConfig = {
  development: {},
  staging: {
    isProduction: true,
    port: 5000
  },
  production: {
    isProduction: true,
    port: 5001
  }
}

module.exports = Object.assign(
  commonConfig,
  environmentConfig[process.env.ENV || process.env.NODE_ENV || 'development']
)