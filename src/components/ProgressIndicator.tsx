import { PageType } from "../App";
import { questions } from "../resources/questions";

type ComponentProps = {
	progress: number;
	page: PageType;
};

export default function ProgressIndicator(props: ComponentProps) {
	const total = questions.length + 2; /** 2 = start and finish page */

	const calculateProgress = () => {
		if (props.page === "start") return 0;
		if (props.page === "finish") return total;
		else return props.progress + 1; /** +1 = props.progress start from zero */
	};

	return (
		<div className="relative flex h-10 w-full flex-col items-center justify-center px-4">
			<div className="flex h-2 w-full flex-row items-center rounded-full bg-primary/25">
				<div
					className="h-2 overflow-clip rounded-full bg-primary"
					style={{ width: `${(calculateProgress() / total) * 100}%` }}
				/>
			</div>
		</div>
	);
}
