import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OrDivider } from "./OrDivider";

describe("OrDivider", () => {
	it("renders correctly", () => {
		render(<OrDivider />);
		expect(screen.getByText(/ou entre com outras contas/i)).toBeInTheDocument();
	});
});
