import type { PageType } from "../App";
import Button from "../components/ui/Button";

type ComponentProps = {
	nextPage: (to: PageType) => void;
	progress: number;
};

export default function FinishPage(_: ComponentProps) {
	const restart = () => {
		/** delete user progress */
		localStorage.removeItem("progress");
		localStorage.removeItem("answers");
		window.location.reload();
	};
	return (
		<article className="flex h-full flex-col justify-between gap-y-8">
			<div className="flex h-full flex-col items-center justify-center border-2 border-solid border-primary bg-white px-4 py-6 shadow-hard">
				<h1 className="text-center text-2xl font-semibold">
					Thank you for your participation!
				</h1>
			</div>

			<div className="flex flex-col items-center justify-center gap-y-3">
				<Button onClick={restart}>Restart Survey</Button>
			</div>
		</article>
	);
}
