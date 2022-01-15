import React from "react";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import FeaturedRepos from "./components/FeaturedRepos";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faRss } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGlobe, faRss);

library.add(fab);

function App() {
	return (
		<>
			<Sidebar />
			<div id="wrapper">
				<Intro />
				<FeaturedRepos />
				<Contact />
			</div>
		</>
	);
}

export default App;
