import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AuthBanner } from "./AuthBanner";

describe("AuthBanner", () => {
	it("renders correctly", () => {
		const { container } = render(<AuthBanner imageSrc="test.png" />);
		expect(screen.getByText(/code connect/i)).toBeInTheDocument();

		const img = container.querySelector("img");
		expect(img).toHaveAttribute("src", "test.png");
	});
});
