import React from "react";

const ProjectCard = ({ name, commitCount, description, homepageUrl, languages, imageUrl, topics, updatedAt, repoUrl }) => {
	const projectName = name
		.split("-")
		.map(w => w[0].toUpperCase().concat(w.slice(1)))
		.join(" ");
	return (
		<section className="project">
			<a href={imageUrl} className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
				<img src={imageUrl} alt={`Cover for ${projectName}`} data-position="center center" style={{ display: "none" }} />
			</a>
			<div className="content">
				<div className="inner">
					<h2>{projectName}</h2>
					<p>{description}</p>
					{topics.length > 0 && (
						<p>
							{topics.map((topic, i) => {
								return <span key={i}>#{topic.topic.name} </span>;
							})}
						</p>
					)}
					<ul className="actions">
						{repoUrl && (
							<li>
								<a href={repoUrl} target="_blank" className="button" rel="noreferrer">
									{"</>"} Code
								</a>
							</li>
						)}
						{homepageUrl && (
							<li>
								<a href={homepageUrl} target="_blank" className="button primary" rel="noreferrer">
									Live Site
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProjectCard;
