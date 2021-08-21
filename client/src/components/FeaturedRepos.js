import React from "react";
import { useQuery } from "@apollo/client";
import { FeaturedReposQuery } from "../queries/github-queries";
import Loading from "./Loading";

const FeaturedRepos = () => {
	const { loading, error, data } = useQuery(FeaturedReposQuery);
	const featuredRepos = data?.getFeaturedRepos;

	return (
		<div>
			<h1>This is the FeaturedRepos section</h1>
			<Loading loading={loading} source="GitHub" />
			{error && `Error! ${error.message}`}
			{data &&
				featuredRepos.map((r, index) => {
					return (
						<div key={index}>
							<h1>{r.name}</h1>
							{Object.keys(r).map((k, index) => {
								return <div key={index}>{`${k}: ${r[k]}`}</div>;
							})}
						</div>
					);
				})}
		</div>
	);
};

export default FeaturedRepos;
