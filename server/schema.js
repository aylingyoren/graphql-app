const { buildSchema } = require("graphql");

const schema = buildSchema(`
   type User {
      id: ID,
      username: String,
      age: Int,
      posts: [Post]
   }
   type Post {
      id: ID,
      title: String,
      content: String
   }
   input UserInput {
      id: ID,
      username: String!,
      age: Int!,
      posts: [PostInput]
   }
   input PostInput {
      id: ID,
      title: String!,
      content: String!
   }
   type Query {
      getUsers: [User],
      getUser(id: ID): User
   }
   type Mutation {
      createUser(input: UserInput): User
   }
`);

module.exports = schema;
