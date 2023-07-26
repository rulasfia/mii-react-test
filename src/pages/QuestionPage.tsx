import { SetStateAction } from "react";
import { questions } from "../resources/questions";
import Button from "../components/ui/Button";
import type { PageType } from "../App";

type ComponentProps = {
	nextPage: (to: PageType) => void;
	progress: number;
	updateProgress: (x: SetStateAction<number>) => void;
};

export default function QuestionPage(props: ComponentProps) {
	const goToNextQuestion = () => {
		props.updateProgress((cVal) => cVal + 1);
		/** save user question progress */
		localStorage.setItem("progress", (props.progress + 1).toString());
		/** TODO: save user answer */
	};

	const goToPrevQuestion = () => {
		props.updateProgress((cVal) => cVal - 1);
		/** save user progress */
		localStorage.setItem("progress", (props.progress - 1).toString());
	};

	console.log({ progress: props.progress });
	return (
		<article className="flex h-full flex-col justify-between">
			<div className="flex flex-col items-center">
				<p>Question {props.progress + 1}</p>

				{questions.map((q, idx) => {
					return idx === props.progress ? (
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
					className={props.progress < 1 ? "hidden" : ""}
				>
					Prev
				</Button>
				<Button
					onClick={
						props.progress >= questions.length - 1
							? () => props.nextPage("finish")
							: goToNextQuestion
					}
				>
					{props.progress >= questions.length - 1 ? "Finish" : "Next"}
				</Button>
			</div>
		</article>
	);
}
