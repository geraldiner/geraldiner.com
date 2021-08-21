import React from "react";
import { useQuery } from "@apollo/client";
import { AboutQuery } from "../queries/github-queries";
import Loading from "./Loading";

const About = () => {
	const { loading, error, data } = useQuery(AboutQuery);
	const me = data && data.getAbout;

	return (
		<div>
			<h1>This is the About section</h1>
			<Loading loading={loading} source="GitHub" />
			{error && `Error! ${error.message}`}
			{data &&
				Object.keys(me).map((k, index) => {
					return <div key={index}>{`${k}: ${me[k]}`}</div>;
				})}
		</div>
	);
};

export default About;
