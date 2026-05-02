import type { ReactNode } from "react";

interface AuthLayoutProps {
	banner: ReactNode;
	children: ReactNode;
}

export function AuthLayout({ banner, children }: AuthLayoutProps) {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
			<div className="w-full max-w-[1000px] flex flex-col lg:flex-row bg-bg-card rounded-2xl overflow-hidden shadow-2xl min-h-[600px]">
				{/* Banner Column */}
				<div className="w-full lg:w-[450px] shrink-0">{banner}</div>

				{/* Content Column */}
				<div className="w-full flex-1 flex items-center justify-center p-8 sm:p-12">
					<div className="w-full max-w-sm flex flex-col items-center">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
