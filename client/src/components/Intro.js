import React from "react";
import { useQuery } from "@apollo/client";
import { AboutQuery } from "../queries/github-queries";
import Loading from "./Loading";

const Intro = () => {
	const { loading, error, data } = useQuery(AboutQuery);
	const me = data && data?.getAbout;

	return (
		<section id="intro" className="wrapper style1 fullscreen fade-up">
			<div className="inner">
				<Loading loading={loading} source="GitHub" />
				{error && `Error! ${error.message}`}
				{data && (
					<>
						<h1>Hi, I'm {me.name} 😊</h1>
						<h2>Full-Stack Software Engineer</h2>
						<p>{me.bio}</p>
						<p>
							<span dangerouslySetInnerHTML={{ __html: me.status.emojiHTML }}></span>
							{me.status.message}
						</p>
						<ul className="actions">
							<li>
								<a href="#work" className="button scrolly">
									See Projects
								</a>
								<a className="button primary scrolly" href="../assets/files/GeraldineRagsac_Resume_2021.pdf" target="_blank">
									Resume
								</a>
							</li>
						</ul>
					</>
				)}
			</div>
		</section>
	);
};

export default Intro;
