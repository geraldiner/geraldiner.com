import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48">
				<div className="lg:col-span-3 col-span-12">
					<h1>Geraldine.</h1>
					<h2>Full-Stack Software Engineer</h2>
					<p>Using my knowledge and experience in design and development to do what I do best: bring joy to people's lives</p>
				</div>
				<div class="lg:col-span-9 col-span-12">Main area</div>
				<div className="fixed left-0 bottom-0 w-full md:hidden">
					<nav className="w-full bg-white inline-flex justify-around">
						<a href="/" className="text-xs py-4 px-5">
							Projects
						</a>
						<a href="/" className="text-xs py-4 px-5">
							About
						</a>
						<a href="/" className="text-xs py-4 px-5">
							Resume
						</a>
						<a href="/" className="text-xs py-4 px-5">
							Contact
						</a>
					</nav>
				</div>
			</div>
		</Router>
	);
}

export default App;
