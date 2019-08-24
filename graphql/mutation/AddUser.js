var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var userType = require('../type/UserType');
var userModel = require('../../models/User');
exports.addUser = {
  type: userType.userType,
/* define the arguments that we should pass to the mutation
   here we require both book name and the author name 
   the id will be generated automatically 
*/
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
        type: new GraphQLNonNull(GraphQLString),
      },
   password: {
        type: new GraphQLNonNull(GraphQLString),
      }	
  },
  resolve: async(root, args)=> {
 //under the resolve method we get our arguments
  
    const uModel = new userModel(args);
    const newUser = await uModel.save();
    if (!newUser) {
      throw new Error('error');
    }
    return newUser
  }
}
