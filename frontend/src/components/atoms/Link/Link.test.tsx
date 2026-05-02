import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
	it("renders correctly", () => {
		render(
			<MemoryRouter>
				<Link to="/test">Test Link</Link>
			</MemoryRouter>
		);
		expect(
			screen.getByRole("link", { name: /test link/i })
		).toBeInTheDocument();
	});

	it("has correct href", () => {
		render(
			<MemoryRouter>
				<Link to="/test">Test Link</Link>
			</MemoryRouter>
		);
		const link = screen.getByRole("link", { name: /test link/i });
		expect(link).toHaveAttribute("href", "/test");
	});

	it("applies standard styles", () => {
		render(
			<MemoryRouter>
				<Link to="/test">Test Link</Link>
			</MemoryRouter>
		);
		const link = screen.getByRole("link", { name: /test link/i });
		expect(link).toHaveClass("text-accent");
	});
});
