import { useEffect, useState } from "react";
import type { PageType } from "../App";
import Button from "../components/ui/Button";

type ComponentProps = {
	nextPage: (to: PageType) => void;
	progress: number;
};

export default function FinishPage(_: ComponentProps) {
	const [isTimesUp, setIsTimesUp] = useState(false);

	const restart = () => {
		/** delete user progress */
		localStorage.removeItem("progress");
		localStorage.removeItem("answers");
		window.location.reload();
	};

	/** synchronize completion status on component load */
	useEffect(() => {
		const answers = JSON.parse(localStorage.getItem("answers") ?? "0");
		if (typeof answers === "object" && Object.keys(answers).length !== 10) {
			setIsTimesUp(true);
		}
	}, []);

	return (
		<article className="flex h-full flex-col justify-between gap-y-8">
			<div className="flex h-full flex-col items-center justify-between border-2 border-solid border-primary bg-white px-4 py-6 shadow-hard">
				<p className="mb-4 text-lg font-medium underline underline-offset-8">
					{isTimesUp ? "Time's Up ⌛" : ""}
				</p>
				<h1 className="text-center text-2xl font-semibold">
					Thank you for your participation!
				</h1>
				<div></div>
			</div>

			<div className="w-full rounded border border-primary md:ml-0" />
			<div className="flex flex-col items-center justify-center gap-y-3">
				<Button onClick={restart} variant="outline">
					Restart Survey
				</Button>
			</div>
		</article>
	);
}
