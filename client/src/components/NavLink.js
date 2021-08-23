import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NavLink = ({ index, label, to, exact }) => {
	let match = useRouteMatch({
		path: to,
		exact: exact,
	});
	return (
		<>
			{match && ""}
			<Link to={to} className={`text-center text-sm w-1/4 p-3 hover:bg-green-dark hover:font-bold hover:text-white ${match ? "active" : ""}`}>
				{label}
			</Link>
		</>
	);
};

export default NavLink;
