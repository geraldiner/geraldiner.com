import React from "react";

const Sidebar = () => {
	return (
		<div id="sidebar" className="fixed">
			<section id="top-desc">
				<h1>Geraldine.</h1>
				<h2>Full-Stack Software Engineer</h2>
				<p>Using my knowledge and experience in design and development to do what I do best: bring joy to people's lives. ✨💖</p>
			</section>
			<ul id="social-links"></ul>
			<nav id="main-nav">
				<ol>
					<li>
						<a href="/">Projects</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="../assets/GeraldineRagsac_Resume_2021.pdf">Resume</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ol>
			</nav>
		</div>
	);
};

export default Sidebar;
