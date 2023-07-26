import { cn } from "mxcn";
import type { ButtonHTMLAttributes } from "react";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	children,
	className,
	...props
}: ComponentProps) {
	return (
		<button
			className={cn(
				"w-full rounded-md bg-primary px-6 py-2 font-semibold text-primary-foreground",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
