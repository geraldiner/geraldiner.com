import React from "react";
import { useQuery } from "@apollo/client";
import { AboutQuery } from "../queries/github-queries";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LINKS, SOCIALS } from "./constants/links";

const Sidebar = () => {
	const { loading, error, data } = useQuery(AboutQuery);
	const me = data && data.getAbout;

	return (
		<>
			{/* Mobile Parts */}
			<div className="lg:hidden">
				<div className="flex align-center p-4 space-x-2">
					<button className="mobile-menu-button  focus:outline-none focus:bg-gray-700">
						<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<h1 className="text-lg">Geraldine.</h1>
				</div>
			</div>
			{/* Default Styles */}
			<div className="text-center bg-white border-gray-900 border-4 rounded-md m-4 lg:ml-32 lg:mt-16 lg:fixed lg:w-64 lg:text-left">
				<section id="top-desc" className="p-3">
					<Loading loading={loading} source="GitHub" />
					{error && `Error! ${error.message}`}
					<h1 className="hidden lg:text-5xl lg:block my-3">{data && me.name}.</h1>
					<h2 className="text-lg lg:text-2xl my-2 lg:my-5">Full-Stack Software Engineer</h2>
					<p className="text-sm lg:text-base">{data && me.bio}</p>
				</section>
				<section id="social-links" className="hidden lg:flex lg:justify-around ">
					{SOCIALS.map(social => {
						return (
							<a href={social.link} className="text-2xl p-3 text-yellow-400 rounded-sm">
								<FontAwesomeIcon icon={["fab", social.name]} className={social.name} />
							</a>
						);
					})}
				</section>
				<section className="border-t-4 border-gray-900 my-3">
					<div className="py-2 px-3 flex">
						{/* <span className="mr-2" dangerouslySetInnerHTML={{ __html: me.status.emojiHTML }}></span>
						<span className="text-sm">{`${me.status.message}`}</span> */}
					</div>
				</section>
			</div>
			{/* Mobile Parts */}
			<div className="fixed left-0 bottom-0 lg:hidden">
				<nav className="flex w-screen justify-around bg-white">
					{LINKS.map(link => {
						return (
							<a href={link.path} className="bg-white py-5 px-3">
								{link.name}
							</a>
						);
					})}
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
