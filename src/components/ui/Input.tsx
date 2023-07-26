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
					"h-4 w-4 rounded-full focus:rounded-full focus:border-none focus:outline-none focus:ring focus:ring-primary",
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
