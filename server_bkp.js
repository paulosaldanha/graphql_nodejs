var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testedb").then(
	() => {console.log('Database connection is successful')},
	err => { console.log('Error when connection to the database'+err)}
);

var schema = buildSchema(`
	type Query {
		hello: String
	},
`);

var root = {
	hello: () => {
		return 'Hello world!';	
	},
};

var app = express();
app.use('/graphql',graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
