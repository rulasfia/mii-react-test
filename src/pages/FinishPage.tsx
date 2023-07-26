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
		<article className="flex h-full flex-col justify-between">
			<div className="flex flex-col items-center">
				<p>Thank you for your participation!</p>
			</div>

			<div className="flex flex-col items-center justify-center gap-y-3">
				<Button onClick={restart}>Restart Survey</Button>
			</div>
		</article>
	);
}
