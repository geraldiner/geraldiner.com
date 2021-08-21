import About from "./components/About";
import FeaturedRepos from "./components/FeaturedRepos";
import RecentRepos from "./components/RecentRepos";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello, world!</h1>
			</header>
			<About />
			<FeaturedRepos />
			<RecentRepos />
		</div>
	);
}

export default App;
