import express from "express";
import expressGraphQL from "express-graphql";
import schema from "./schema/schema";
import connectDB from "./config/db";
/**
|--------------------------------------------------
| Init server & DB
|--------------------------------------------------
*/
const app = express();
connectDB();
/**
|--------------------------------------------------
| GraphQL init
|--------------------------------------------------
*/
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

/**
|--------------------------------------------------
| Test Route
|--------------------------------------------------
*/
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to Express/TypeScript CRUD requests" });
});

/**
|--------------------------------------------------
| Server init
|--------------------------------------------------
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
