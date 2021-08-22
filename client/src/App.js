import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";
// import About from "./components/About";
// import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
	return (
		<Router>
			<Sidebar />
		</Router>
	);
}

export default App;
