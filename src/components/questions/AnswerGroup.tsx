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
		<fieldset>
			{q.answers.map((item, aIdx) => (
				<label key={item} className="flex items-center">
					<Input
						type="radio"
						name={q.question}
						id={item}
						value={item}
						checked={savedAnswerID === aIdx}
						onChange={() => updateSavedAnswer(q.id, aIdx)}
					/>
					<span className="ml-2 text-sm font-medium">{item}</span>
				</label>
			))}
		</fieldset>
	);
}
