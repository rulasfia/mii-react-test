import type { PageType } from "../App";
import { SetStateAction, useEffect, useState } from "react";
import { questions } from "../resources/questions";
import Button from "../components/ui/Button";
import AnswerGroup from "../components/questions/AnswerGroup";
import Timer from "../components/questions/Timer";

type ComponentProps = {
	nextPage: (to: PageType) => void;
	progress: number;
	updateProgress: (x: SetStateAction<number>) => void;
};

export default function QuestionPage(props: ComponentProps) {
	const [savedAnswer, setSavedAnswer] = useState<{ [k: string]: number }>({});

	/** synchronize user previous answer when opening question page */
	useEffect(() => {
		const answers = JSON.parse(localStorage.getItem("answers") ?? "0");
		if (typeof answers === "object") setSavedAnswer(answers);
	}, []);

	const goToNextQuestion = () => {
		/** save user question progress */
		localStorage.setItem("progress", (props.progress + 1).toString());

		props.updateProgress((cVal) => cVal + 1);
	};

	const updateSavedAnswer = (qID: string, aIdx: number) => {
		const updatedAnswer = { ...savedAnswer, [qID]: aIdx };
		/** save user answer */
		setSavedAnswer(updatedAnswer);
		localStorage.setItem("answers", JSON.stringify(updatedAnswer));
	};

	console.log({
		prog: props.progress,
		sa: savedAnswer,
		sal: Object.keys(savedAnswer).length,
	});
	return (
		<article className="flex h-full flex-col justify-between gap-y-8">
			<div className="flex h-full flex-col items-start border-2 border-solid border-primary bg-white px-4 py-8 shadow-hard">
				<h1 className="mx-auto mb-4 w-full max-w-xl text-3xl font-bold text-primary opacity-60">
					Q{props.progress + 1}
				</h1>

				{questions.map((q, idx) => {
					return idx === props.progress ? (
						<div
							key={q.id}
							className="mx-auto flex w-full max-w-xl flex-col gap-y-4"
						>
							<p className="text-lg">{q.question}</p>
							<AnswerGroup
								question={q}
								savedAnswerID={savedAnswer[q.id]}
								updateSavedAnswer={updateSavedAnswer}
							/>
						</div>
					) : null;
				})}
			</div>

			<div className="flex flex-col items-center justify-center gap-y-3">
				<Timer nextPage={props.nextPage} />
				<Button
					onClick={
						props.progress >= questions.length - 1
							? () => props.nextPage("finish")
							: goToNextQuestion
					}
					disabled={
						Object.keys(savedAnswer).length === props.progress + 1
							? false
							: true
					}
				>
					{props.progress >= questions.length - 1 ? "Finish" : "Next"}
				</Button>
			</div>
		</article>
	);
}
