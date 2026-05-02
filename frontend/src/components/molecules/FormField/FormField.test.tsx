import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormField } from "./FormField";

describe("FormField", () => {
	it("renders label and input", () => {
		render(<FormField label="Username" id="username" />);
		expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
	});

	it("renders error message when provided", () => {
		render(<FormField label="Email" id="email" errorMessage="Invalid email" />);
		expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
	});

	it("applies error state to input when errorMessage is present", () => {
		render(<FormField label="Email" id="email" errorMessage="Error" />);
		const input = screen.getByLabelText(/email/i);
		expect(input).toHaveClass("border-red-500");
	});
});
