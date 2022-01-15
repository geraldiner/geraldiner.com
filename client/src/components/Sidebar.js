import React from "react";
import Social from "./Social";

const Sidebar = () => {
	return (
		<>
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li>
								<a href="#intro">Home</a>
							</li>
							<li>
								<a href="#work">Work</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</nav>{" "}
					<Social />
				</div>
			</section>
		</>
	);
};

export default Sidebar;
