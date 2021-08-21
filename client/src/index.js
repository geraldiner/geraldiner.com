import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const url = (process.env.NODE_ENV = "development" ? "http://localhost:4000" : "https://geraldiner-com.herokuapp.com");

const client = new ApolloClient({
	uri: url,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
