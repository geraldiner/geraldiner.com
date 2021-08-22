import React from "react";

const ProjectCard = ({ name, commitCount, description, homepageUrl, languages, imageUrl, topics, updatedAt, repoUrl }) => {
	return (
		<>
			<div className="text-center mx-2 my-8 lg:mx-16 lg:text-left">
				<div className="p-3 bg-white">
					<h1 className="text-3xl my-3">
						{name
							.split("-")
							.map(w => w[0].toUpperCase().concat(w.slice(1)))
							.join(" ")}
					</h1>
					<p className="my-2">{description}</p>
					<img className="my-4" src={imageUrl} alt={description} />
					<p className="my-4">
						Last updated <span className="accent font-bold">{updatedAt}</span> with <span class="accent font-bold">{commitCount} commits</span>
					</p>
					{topics.length > 0 && (
						<p className="py-3 border-t-2 border-gray-900">
							{topics.map((topic, i) => {
								return (
									<span key={i} className="accent">
										#{topic.topic.name}{" "}
									</span>
								);
							})}
						</p>
					)}
				</div>
				<div className="flex-1 text-center">
					<a href={repoUrl} className="rounded-bl-md inline-block w-1/2 p-3 bg-blue-500 text-white font-bold">
						{`</>`} Code
					</a>
					{homepageUrl.length > 0 && (
						<a href={homepageUrl} className="rounded-br-md inline-block w-1/2 p-3 bg-green-500 text-white font-bold">
							Live
						</a>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
