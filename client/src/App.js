import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<Sidebar />
		</Router>
	);
}

export default App;
