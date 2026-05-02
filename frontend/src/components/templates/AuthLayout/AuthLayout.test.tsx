import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AuthLayout } from "./AuthLayout";

describe("AuthLayout", () => {
	it("renders banner and children slots", () => {
		render(
			<AuthLayout banner={<div>Banner Slot</div>}>
				<div>Children Slot</div>
			</AuthLayout>
		);

		expect(screen.getByText(/banner slot/i)).toBeInTheDocument();
		expect(screen.getByText(/children slot/i)).toBeInTheDocument();
	});
});
