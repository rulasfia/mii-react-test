import { useEffect, useState } from "react";
import ProgressIndicator from "./components/ProgressIndicator";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import FinishPage from "./pages/FinishPage";

const router = [StartPage, QuestionPage, FinishPage];

function App() {
	/** active page state */
	const [activePage, setActivePage] = useState(0);
	const [userProgress, setUserProgress] = useState(0);

	/** synchronize user progress on load */
	useEffect(() => {
		const progress = parseInt(localStorage.getItem("progress") ?? "0");

		setUserProgress(isNaN(progress) ? 0 : progress);
	}, []);

	const goToNextPage = (restart?: boolean) => {
		setActivePage((cVal) => cVal + 1);
		if (restart) setUserProgress(0);
	};

	return (
		<>
			<ProgressIndicator />
			<main className="container mx-auto grid min-h-[calc(100dvh-2.5rem)] max-w-3xl grid-cols-1 px-4 py-4 md:px-0">
				{router.map((Page, idx) => {
					return activePage === idx ? (
						<Page key={idx} nextPage={goToNextPage} progress={userProgress} />
					) : null;
				})}
			</main>
		</>
	);
}

export default App;
