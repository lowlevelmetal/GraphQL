const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();

// Setup GUI and Schema
app.use("/graphql", graphqlHTTP({
	schema,
	graphiql: true
}));

// Listen on port 80
app.listen(80, () => {
	console.log("Now listening for requests on port 80");
});
