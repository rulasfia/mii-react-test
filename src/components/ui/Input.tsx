import { cn } from "mxcn";
import type { InputHTMLAttributes } from "react";

type ComponentProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
	children,
	className,
	type,
	...props
}: ComponentProps) {
	if (type === "radio") {
		return (
			<input
				type={type}
				className={cn(
					"h-5 w-5 rounded-full outline-primary/50 focus:rounded-full focus:border-none focus:outline-2",
					className,
				)}
				{...props}
			>
				{children}
			</input>
		);
	}

	return (
		<input type={type} className={cn(className)} {...props}>
			{children}
		</input>
	);
}
