export default function ProgressIndicator() {
	const done = 2;
	const total = 12;
	return (
		<div className="w-full relative px-4 py-6">
			<div className="flex rounded-full flex-row items-center bg-primary/40">
				<div
					className="h-2 bg-primary rounded-full overflow-clip"
					style={{ width: `${(done / total) * 100}%` }}
				/>
			</div>
		</div>
	);
}
