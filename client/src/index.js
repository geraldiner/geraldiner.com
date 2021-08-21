import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.NODE_ENV);

const url = process.env.NODE_ENV !== "production" ? "http://localhost:4000" : "https://geraldiner-com.herokuapp.com";

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
