import { questions } from "../../resources/questions";
import Input from "../ui/Input";

type ComponentProps = {
	question: (typeof questions)[number];
	savedAnswerID: number;
	updateSavedAnswer: (qID: string, aIdx: number) => void;
};

export default function AnswerGroup({
	question: q,
	savedAnswerID,
	updateSavedAnswer,
}: ComponentProps) {
	return (
		<fieldset className="flex flex-col gap-y-2">
			{q.answers.map((item, aIdx) => (
				<label key={item} className="flex items-center py-2">
					<Input
						type="radio"
						name={q.question}
						id={item}
						value={item}
						checked={savedAnswerID === aIdx}
						onChange={() => updateSavedAnswer(q.id, aIdx)}
					/>
					<span className="ml-3 font-medium">{item}</span>
				</label>
			))}
		</fieldset>
	);
}
