import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Main from "./components/Main";
import About from "./components/About";
// import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
	return (
		<Router>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/3">
					<Sidebar />
				</div>
				<div className="w-full lg:w-2/3 flex flex-col">
					<TopNav />
					<div className="mt-12">
						<Switch>
							<Route path="/" exact>
								<Main />
							</Route>
							<Route path="/about">
								<About />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
