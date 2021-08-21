import React from "react";
import { useQuery } from "@apollo/client";
import { RecentReposQuery } from "../queries/github-queries";
import Loading from "./Loading";

const RecentRepos = () => {
	const { loading, error, data } = useQuery(RecentReposQuery);
	const recentRepos = data?.getRecentRepos;

	return (
		<div>
			<h1>This is the RecentRepos section</h1>
			<Loading loading={loading} source="GitHub" />
			{error && `Error! ${error.message}`}
			{data &&
				recentRepos.map((r, index) => {
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

export default RecentRepos;
