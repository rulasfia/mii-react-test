export default function ProgressIndicator() {
	const done = 2;
	const total = 12;
	return (
		<div className="w-full relative h-10 px-4 flex flex-col items-center justify-center">
			<div className="flex rounded-full w-full h-2 flex-row items-center bg-primary/25">
				<div
					className="h-2 bg-primary rounded-full overflow-clip"
					style={{ width: `${(done / total) * 100}%` }}
				/>
			</div>
		</div>
	);
}
