import ProgressIndicator from "./components/ProgressIndicator";
import StartPage from "./components/StartPage";

function App() {
	return (
		<>
			<ProgressIndicator />
			<main className="container max-w-3xl mx-auto">
				<StartPage />
			</main>
		</>
	);
}

export default App;
