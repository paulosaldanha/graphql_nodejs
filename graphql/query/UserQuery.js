var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
//import book model 
var UserModel = require('../../models/User');
//import GraphQL BookType
var userType = require('../type/UserType').userType;

// Query
exports.UserQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve:  async ()=> {
          const users = await UserModel.find()
          if (!users) {
            throw new Error('error while fetching data')
          }
          return users
        }
      }
    }
  }
})
