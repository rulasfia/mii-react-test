import { useEffect, useState } from "react";
import { PageType } from "~/App";
import { formatTime } from "~/utils/dateTimeFormatter";

type ComponentProps = {
	nextPage: (to: PageType) => void;
};

export default function Timer({ nextPage }: ComponentProps) {
	const [remTime, setRemTime] = useState(300); /** 5 minutes */

	/** effect for setting up interval */
	useEffect(() => {
		const interval = setInterval(() => {
			setRemTime((cVal) => cVal - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	/**
	 * effect for tracking 'time' state
	 * when 'time' === 0, go to finish page
	 */
	useEffect(() => {
		if (remTime === 0) nextPage("finish");
	}, [remTime, nextPage]);

	return <p className="font-medium">Remaining Time: {formatTime(remTime)}</p>;
}
