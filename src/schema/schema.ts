import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList
} from "graphql";
import User from "../models/User";
import RootQuery from "./rootQueries";
import RootMutation from "./rootMutation";

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
