import { cn } from "mxcn";
import type { HTMLAttributes } from "react";

type ComponentProps = HTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	className,
	...props
}: ComponentProps) {
	return (
		<button
			{...props}
			className={cn(
				"w-full rounded-md bg-primary px-6 py-2 font-semibold text-primary-foreground",
				className,
			)}
		>
			{children}
		</button>
	);
}
