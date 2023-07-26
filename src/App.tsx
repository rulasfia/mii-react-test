import { useEffect, useState } from "react";
import ProgressIndicator from "./components/ProgressIndicator";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import FinishPage from "./pages/FinishPage";

export type PageType = "start" | "question" | "finish";

function App() {
	/** active page state */
	const [activePage, setActivePage] = useState<PageType>("start");
	/** active question state */
	const [userProgress, setUserProgress] = useState(0);

	/** synchronize user progress on load */
	useEffect(() => {
		const progress = parseInt(localStorage.getItem("progress") ?? "0");
		setUserProgress(isNaN(progress) ? 0 : progress);
	}, []);

	const goToNextPage = (to: PageType, restart?: boolean) => {
		setActivePage(to);
		if (restart) setUserProgress(0);
	};

	return (
		<>
			<ProgressIndicator progress={userProgress} page={activePage} />
			<main className="container mx-auto grid min-h-[calc(100dvh-2.5rem)] max-w-3xl grid-cols-1 px-4 py-4 md:px-0">
				{/* start page */}
				{activePage === "start" && (
					<StartPage nextPage={goToNextPage} progress={userProgress} />
				)}

				{/* question page */}
				{activePage === "question" && (
					<QuestionPage
						nextPage={goToNextPage}
						progress={userProgress}
						updateProgress={setUserProgress}
					/>
				)}

				{/* finish page */}
				{activePage === "finish" && (
					<FinishPage nextPage={goToNextPage} progress={userProgress} />
				)}
			</main>
		</>
	);
}

export default App;
