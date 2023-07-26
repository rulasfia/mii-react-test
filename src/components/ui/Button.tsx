import { cn } from "mxcn";
import type { ButtonHTMLAttributes } from "react";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "outline";
};

export default function Button({
	children,
	className,
	variant = "primary",
	...props
}: ComponentProps) {
	return (
		<button
			className={cn(
				"w-full border-2 border-solid border-primary px-6 py-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
				variant === "primary" &&
					"bg-primary text-primary-foreground hover:bg-primary/95",
				variant === "outline" &&
					"bg-transparent text-foreground hover:bg-primary/10",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
