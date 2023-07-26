// import { useState } from "react";
import Button from "../components/ui/Button";

type ComponentProps = {
	nextPage: (_?: boolean) => void;
	progress: number;
};

export default function StartPage(props: ComponentProps) {
	const isContinuing = props.progress ? true : false;

	/** synchronize user progress on load */
	// useEffect(() => {
	// 	const progress = localStorage.getItem("progress");

	// 	if (progress) setIsContinuing(true);
	// }, []);

	const startOver = () => {
		/** delete user progress */
		localStorage.removeItem("progress");
		props.nextPage(true);
	};

	return (
		<article className="flex h-full flex-col justify-between">
			<div className="flex flex-col items-center">
				<p>Wellcome to</p>
				<h1 className="text-2xl font-bold">Tomato Survey!</h1>
			</div>

			<div>
				<h5>Notes:</h5>
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</div>

			<div className="flex flex-col items-center justify-center gap-y-3">
				{isContinuing ? (
					<Button onClick={startOver}>{"Start Over"}</Button>
				) : null}
				<Button onClick={() => props.nextPage()}>
					{isContinuing ? "Continue" : "Start"}
				</Button>
			</div>
		</article>
	);
}
