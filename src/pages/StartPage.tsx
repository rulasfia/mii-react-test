// import { useState } from "react";
import type { PageType } from "../App";
import Button from "../components/ui/Button";

type PageProps = {
	nextPage: (to: PageType, restart?: boolean) => void;
	progress: number;
};

export default function StartPage(props: PageProps) {
	const isContinuing = props.progress ? true : false;

	const startOver = () => {
		/** delete user progress */
		localStorage.removeItem("progress");
		props.nextPage("question", true);
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
				<Button onClick={() => props.nextPage("question")}>
					{isContinuing ? "Continue" : "Start"}
				</Button>
			</div>
		</article>
	);
}
