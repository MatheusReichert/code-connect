import githubIcon from "../../../assets/github.png";
import gmailIcon from "../../../assets/gmail.png";

export interface SocialLoginButtonProps {
	provider: "github" | "gmail";
	onClick?: () => void;
}

export function SocialLoginButton({
	provider,
	onClick,
}: SocialLoginButtonProps) {
	const providers = {
		github: {
			label: "Github",
			icon: githubIcon,
		},
		gmail: {
			label: "Gmail",
			icon: gmailIcon,
		},
	};

	const { label, icon } = providers[provider];

	return (
		<button
			onClick={onClick}
			type="button"
			className="flex flex-col items-center gap-2 group transition-all"
		>
			<div className="w-12 h-12 rounded-full bg-bg-base border border-muted/10 flex items-center justify-center group-hover:border-accent transition-all">
				<img src={icon} alt="" className="w-6 h-6" aria-hidden="true" />
			</div>
			<span className="text-muted text-sm group-hover:text-white transition-all">
				{label}
			</span>
		</button>
	);
}
