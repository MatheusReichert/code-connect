import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
	it("calls onSubmit with form values", () => {
		const handleSubmit = vi.fn();
		render(
			<MemoryRouter>
				<LoginForm onSubmit={handleSubmit} />
			</MemoryRouter>
		);

		fireEvent.change(screen.getByLabelText(/email ou usuário/i), {
			target: { value: "testuser" },
		});
		fireEvent.change(screen.getByLabelText(/senha/i), {
			target: { value: "password123" },
		});
		fireEvent.click(screen.getByLabelText(/lembrar-me/i));

		fireEvent.click(screen.getByRole("button", { name: /login/i }));

		expect(handleSubmit).toHaveBeenCalledWith({
			identifier: "testuser",
			password: "password123",
			rememberMe: true,
		});
	});
});
