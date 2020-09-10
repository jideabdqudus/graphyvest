const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");

//Hard coded data

const customers = [
  { id: "1", name: "John Doe", email: "jdoe@gmail.com", age: 35 },
  { id: "2", name: "Jane Doe", email: "janedoe@gmail.com", age: 25 },
  { id: "3", name: "Jack Doe", email: "jackdoe@gmail.com", age: 15 },
  { id: "4", name: "Juliet Doe", email: "julietdoe@gmail.com", age: 35 },
];

//Customer Type
const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id == args.id) {
            return customers[i];
          }
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
