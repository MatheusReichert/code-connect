import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
	it("renders correctly", () => {
		render(<Input placeholder="Enter text" />);
		expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
	});

	it("applies error styles when error prop is true", () => {
		render(<Input error placeholder="Error input" />);
		const input = screen.getByPlaceholderText(/error input/i);
		expect(input).toHaveClass("border-red-500");
	});

	it("updates value when typed into", () => {
		const handleChange = vi.fn();
		render(<Input placeholder="Type here" onChange={handleChange} />);
		const input = screen.getByPlaceholderText(/type here/i) as HTMLInputElement;
		fireEvent.change(input, { target: { value: "Hello" } });
		expect(handleChange).toHaveBeenCalled();
		expect(input.value).toBe("Hello");
	});
});
