import React from "react";

const ProjectCard = ({ name, commitCount, description, homepageUrl, languages, imageUrl, topics, updatedAt, repoUrl }) => {
	const projectName = name
		.split("-")
		.map(w => w[0].toUpperCase().concat(w.slice(1)))
		.join(" ");
	return (
		<section>
			<a href={imageUrl} className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
				<img src={imageUrl} alt={`Cover for ${projectName}`} data-position="center center" style={{ display: "none" }} />
			</a>
			<div className="content">
				<div className="inner">
					<h2>{projectName}</h2>
					<p>{description}</p>
					<ul className="actions">
						<li>
							<a href="generic.html" className="button">
								Learn more
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProjectCard;
