const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const GithubAPI = require("./datasources/github");
const HashnodeAPI = require("./datasources/hashnode");
const typeDefs = require("./schema");
require("dotenv").config({ path: __dirname + "/.env" });

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			githubAPI: new GithubAPI(),
			hashnodeAPI: new HashnodeAPI(),
		};
	},
	context: () => {
		return {
			githubToken: process.env.GITHUB_TOKEN,
			hashnodeToken: process.env.HASHNODE_TOKEN,
			env: process.env.NODE_ENV,
		};
	},
});

server.listen(
	process.env.PORT,
	console.log(`
    Server is running!
    Listening on http://localhost:4000
    Explore at https://studio.apollographql.com/sandbox`),
);
