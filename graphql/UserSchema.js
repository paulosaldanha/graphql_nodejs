var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var query = require('./query/UserQuery').UserQuery;
var mutation = require('./mutation/UserMutation')
exports.UserSchema = new GraphQLSchema({
  query: query,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})
