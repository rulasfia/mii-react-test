import { useState } from "react";
import { questions } from "../resources/questions";
import Button from "../components/ui/Button";

type ComponentProps = {
	nextPage: () => void;
	progress: number;
};

export default function QuestionPage(props: ComponentProps) {
	/** active question state */
	const [activeQuestion, setActiveQuestion] = useState(props.progress);

	/** synchronize user progress on load */
	// useEffect(() => {
	// 	const progress = parseInt(localStorage.getItem("progress") ?? "0");

	// 	setActiveQuestion(isNaN(progress) ? 0 : progress);
	// }, []);

	const goToNextQuestion = () => {
		setActiveQuestion((cVal) => cVal + 1);
		/** save user progress */
		localStorage.setItem("progress", (activeQuestion + 1).toString());
		/** TODO: save user answer */
	};

	const goToPrevQuestion = () => {
		setActiveQuestion((cVal) => cVal - 1);
		/** save user progress */
		localStorage.setItem("progress", (activeQuestion - 1).toString());
	};

	console.log({ activeQuestion });
	return (
		<article className="flex h-full flex-col justify-between">
			<div className="flex flex-col items-center">
				<p>Question {activeQuestion + 1}</p>

				{questions.map((q, idx) => {
					return idx === activeQuestion ? (
						<div key={q.id}>
							<p>{q.question}</p>
							<ul>
								{q.answers.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					) : null;
				})}
			</div>

			<div className="flex flex-col items-center justify-center gap-y-3">
				<Button
					onClick={goToPrevQuestion}
					className={activeQuestion < 1 ? "hidden" : ""}
				>
					Prev
				</Button>
				<Button
					onClick={
						activeQuestion >= questions.length - 1
							? props.nextPage
							: goToNextQuestion
					}
				>
					{activeQuestion >= questions.length - 1 ? "Finish" : "Next"}
				</Button>
			</div>
		</article>
	);
}
