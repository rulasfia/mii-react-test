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
		localStorage.removeItem("answers");
		props.nextPage("question", true);
	};

	return (
		<article className="flex h-full flex-col justify-between gap-y-8">
			<div className="flex h-full flex-col justify-center border-2 border-solid border-primary bg-white px-4 py-8 shadow-hard">
				<div className="flex flex-col items-center">
					<p className="-mb-2 text-xl">Wellcome to</p>
					<h1 className="text-4xl font-bold underline">Tomato Survey</h1>
				</div>

				<div className="mt-12">
					<p className="text-center text-lg">
						You have 5 minutes to complete this survey!
					</p>
				</div>
			</div>

			<div className="w-full rounded border border-primary md:ml-0" />
			<div className="flex flex-col items-center justify-center gap-y-3">
				{isContinuing ? (
					<Button onClick={startOver} variant="outline">
						{"Start Over"}
					</Button>
				) : null}
				<Button onClick={() => props.nextPage("question")}>
					{isContinuing ? "Continue" : "Start"}
				</Button>
			</div>
		</article>
	);
}
