const graphql = require("graphql");
const _ = require("lodash");

// Grab objects from graphql
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
var books = [
	{ name: "Book 1", genre: "Sci-Fi", id: "1" },
	{ name: "Book 2", genre: "Non-Fiction", id: "2" },
	{ name: "Book 3", genre: "Sci-Fi", id: "3" }
];

// Create the book type
const BookType = new GraphQLObjectType({
	name: "Book",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString }
	})
});

// Define book type as book in the root query
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				// code to get data from DB and/or other source
				return _.find(books, { id: args.id }) 
			}
		}
	}
});

// Export the the schema
module.exports = new GraphQLSchema({
	query: RootQuery
});
