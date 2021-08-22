import React from "react";
import { LINKS } from "./constants/links";

const TopNav = () => {
	return (
		<>
			<div className="hidden w-8/12 lg:fixed lg:block bg-white border-gray-900 border-4 rounded-md p-3">
				<nav className="bg-white">
					<ul className="flex inline-block justify-around leading-zero">
						{LINKS.map(link => {
							return (
								<li className="">
									<a href={link.path}>{link.name}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default TopNav;
