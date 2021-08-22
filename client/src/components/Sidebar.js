import React from "react";

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
			<div className="text-center bg-white border-gray-900 border-4 rounded-md p-3 m-3 lg:absolute lg:w-64 lg:text-left">
				<section id="top-desc">
					<h1 className="hidden lg:text-4xl lg:block">Geraldine.</h1>
					<h2 className="text-lg font-bold">Full-Stack Software Engineer</h2>
					<p>Using my knowledge and experience in design and development to do what I do best: bring joy to people's lives. ✨💖</p>
				</section>
				<nav className="">
					<ul className="leading-zero">
						{links.map(link => {
							return (
								<li>
									<a href={link.path} className="block">
										{link.name}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
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
