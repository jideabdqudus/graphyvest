const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();

const schema = require("./schema.js");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("Server Running on 5000"));
