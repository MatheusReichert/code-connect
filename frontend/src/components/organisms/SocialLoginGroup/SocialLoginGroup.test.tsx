import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SocialLoginGroup } from "./SocialLoginGroup";

describe("SocialLoginGroup", () => {
	it("renders both social buttons", () => {
		render(<SocialLoginGroup onSocialLogin={() => {}} />);
		expect(screen.getByText(/github/i)).toBeInTheDocument();
		expect(screen.getByText(/google/i)).toBeInTheDocument();
	});

	it("calls onSocialLogin with correct provider", () => {
		const handleSocial = vi.fn();
		render(<SocialLoginGroup onSocialLogin={handleSocial} />);

		fireEvent.click(screen.getByText(/github/i));
		expect(handleSocial).toHaveBeenCalledWith("github");

		fireEvent.click(screen.getByText(/google/i));
		expect(handleSocial).toHaveBeenCalledWith("gmail");
	});
});
