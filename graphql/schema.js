const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Post {
    _id: ID!
    title: String!
    content: String!
    imageUrl: String!
    creator: User!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    name: String!
    email: Sting!
    password: Sting
    status: Sting!
    posts: [Post!]!
  }

  input UserInputData {
    email: String!
    name: String!
    paasword: String!
  }

  type Mutation {
    createUser(userInput: UserInputData): User!
  }

  schema {
    mutation: RootMutation
  }
`);