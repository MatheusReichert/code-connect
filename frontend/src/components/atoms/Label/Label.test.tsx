import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
	it("renders correctly", () => {
		render(<Label>Email</Label>);
		expect(screen.getByText(/email/i)).toBeInTheDocument();
	});

	it("applies standard styles", () => {
		render(<Label>Email</Label>);
		const label = screen.getByText(/email/i);
		expect(label).toHaveClass("text-white");
		expect(label).toHaveClass("font-semibold");
	});
});
