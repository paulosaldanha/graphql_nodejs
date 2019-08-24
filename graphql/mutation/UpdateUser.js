var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var userType = require('../type/UserType');
var userModel = require('../../models/User');
exports.updateUser = {
    type: userType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async(root, args) =>{
        const UpdatedUser = await userModel.findByIdAndUpdate(args.id,args);
        if (!UpdatedUser) {
          throw new Error('Error')
        }
        return UpdatedUser;
    }
}
