import React from "react";
import { useQuery } from "@apollo/client";
import { PostsQuery } from "../queries/hashnode-queries";
import Loading from "./Loading";
import BlogCard from "./BlogCard";

const Feed = () => {
	const { loading, error, data } = useQuery(PostsQuery);
	const userPosts = data?.getPosts;
	return (
		<div className="p-3 mx-2 lg:mt-8 lg:mx-16">
			<Loading className="w-full p-3 rounded-t-md bg-white" loading={loading} source="Hashnode" />
			{error && `Error! ${error.message}`}
			{data &&
				userPosts.posts.map((p, index) => {
					return (
						<BlogCard
							key={index}
							domain={userPosts.domain}
							title={p.title}
							brief={p.brief}
							coverImage={p.coverImage}
							dateAdded={p.dateAdded}
							totalReactions={p.totalReactions}
							tags={p.tags}
							slug={p.slug}
						/>
					);
				})}
		</div>
	);
};

export default Feed;
