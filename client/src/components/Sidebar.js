import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
	const links = [
		{
			"name": "Projects",
			"path": "/",
		},
		{
			"name": "About",
			"path": "/about",
		},
		{
			"name": "Resume",
			"path": "../assets/GeraldineRagsac_Resume_2021.pdf",
		},
		{
			"name": "Contact",
			"path": "/contact",
		},
	];
	const socials = [
		{
			"name": "linkedin",
			"link": "https://linkedin.com/in/geraldiner",
		},
		{
			"name": "github",
			"link": "https://github.com/geraldiner",
		},
		{
			"name": "twitter",
			"link": "https://twitter.com/geraldinedesue",
		},
	];
	return (
		<>
			{/* Mobile Parts */}
			<div className="lg:hidden">
				<div className="flex align-center p-4 space-x-2">
					<button className="mobile-menu-button  focus:outline-none focus:bg-gray-700">
						<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<h1 className="text-lg">Geraldine.</h1>
				</div>
			</div>
			{/* Default Styles */}
			<div className="text-center bg-white border-gray-900 border-4 rounded-md lg:absolute lg:w-64 lg:text-left m-6 lg:mt-32 lg:ml-36">
				<section id="top-desc" className="p-3 ">
					<h1 className="hidden lg:text-5xl lg:block my-3">Geraldine.</h1>
					<h2 className="text-2xl my-5">Full-Stack Software Engineer</h2>
					<p>Using my knowledge and experience in design and development to do what I do best: bring joy to people's lives. ✨💖</p>
				</section>
				<section id="social-links" className="flex justify-around">
					{socials.map(social => {
						return (
							<a href={social.link} className="text-2xl p-3 text-yellow-400 rounded-sm">
								<FontAwesomeIcon icon={["fab", social.name]} />
							</a>
						);
					})}
				</section>
				<section className="border-t-4 border-gray-900 my-3">
					<div className="p-3">Currently eating cheese</div>
				</section>
			</div>
			{/* Mobile Parts */}
			<div className="fixed left-0 bottom-0 lg:hidden">
				<nav className="flex w-screen justify-around bg-white">
					{links.map(link => {
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
