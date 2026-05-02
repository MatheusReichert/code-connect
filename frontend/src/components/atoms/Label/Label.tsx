import type { LabelHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: generic atom — association via htmlFor from consumer (FormField)
		<label
			className={cn("text-white font-semibold text-sm mb-2 block", className)}
			{...props}
		/>
	);
}
