import React from "react";

const Sidebar = () => {
	return (
		<>
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li>
								<a href="#intro">Welcome</a>
							</li>
							<li>
								<a href="#work">Work</a>
							</li>
							<li>
								<a href="#two">What we do</a>
							</li>
							<li>
								<a href="#contact">Get in touch!</a>
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</>
	);
};

export default Sidebar;
