const { makeExecutableSchema } = require('graphql-tools')
const api = require('../utils/api')

const typeDefs = `
  type Query {
    shots: [Shots]
  }

  type Shots {
    id: ID
    title: String
    description: String
    width: Int
    height: Int
    images: Images
    views_count: Int
    likes_count: Int
    tags: [String]
  }

  type Images {
    hidpi: String
    normal: String
    teaser: String
  }
`

const resolvers = {
  Query: {
    shots: async () => {
      const data = await api.get('/shots').then(data => data.data)
      return data
    }
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
