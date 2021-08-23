import React from "react";
import { LINKS } from "./constants/links";
import NavLink from "./NavLink";

const TopNav = () => {
	return (
		<>
			<div className="hidden w-8/12 lg:fixed lg:block bg-white border-gray-900 border-4 rounded-md">
				<nav className="bg-white flex justify-center">
					{LINKS.map((link, i) => {
						return <NavLink key={i} index={i} label={link.name} to={link.path} exact={link.exact} />;
					})}
				</nav>
			</div>
		</>
	);
};

export default TopNav;
