import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList
} from "graphql";
import UserType from "./typeDefs";
import User from "../models/User";

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { username }) {
        const user = new User({ username });
        return user.save();
      }
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }) {
        return User.findOneAndRemove(id);
      }
    },
    updateUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { id, username }) {
        let userFields = {};
        if (username) {
          userFields = { username };
        }

        return User.findByIdAndUpdate(id, { $set: userFields }, { new: true });
      }
    }
  }
});

export default RootMutation;
