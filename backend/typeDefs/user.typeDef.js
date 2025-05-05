// adding ! means value cannot be null

const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
    transactions: [Transaction!]
  }

  #type Query defines what kind of queries can we have for the users to the schema. 
  #authUser is the query and User is the response. 
  #Here a single User is a response, but we have to send multiple Users in response then we can use [User!]
  #For user(userID:ID!) based on the ID provided, the user will be fetched

  type Query {
    users: [User!]
    authUser: User
    user(userId:ID!): User
  }

  #Here again User is the response.

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  #These are the inputs for the Mutations...The inputs are defined here.

  input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDef;
