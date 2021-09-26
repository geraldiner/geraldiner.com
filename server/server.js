const { ApolloServer } = require("apollo-server");
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const GithubAPI = require("./datasources/github");
require("dotenv").config({ path: __dirname + "/.env" });

function createLambdaServer() {
	const server = new ApolloServerLambda({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				githubAPI: new GithubAPI(),
			};
		},
		context: () => {
			return {
				githubToken: process.env.GITHUB_TOKEN,
				env: process.env.NODE_ENV,
			};
		},
		introspection: true,
		playground: true,
	});
	return server;
}

function createLocalServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				githubAPI: new GithubAPI(),
			};
		},
		context: () => {
			return {
				githubToken: process.env.GITHUB_TOKEN,
				env: process.env.NODE_ENV,
			};
		},
		introspection: true,
		playground: true,
	});
	return server;
}

module.exports = { createLambdaServer, createLocalServer };
