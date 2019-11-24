import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList
} from "graphql";
import UserType from "./typeDefs";
import User from "../models/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      }
    }
  }
});

export default RootQuery;
