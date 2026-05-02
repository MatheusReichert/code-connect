import loginBanner from "../../assets/banner_image.png";
import { Link } from "../../components/atoms/Link/Link";
import { OrDivider } from "../../components/molecules/OrDivider/OrDivider";
import { AuthBanner } from "../../components/organisms/AuthBanner/AuthBanner";
import type { LoginValues } from "../../components/organisms/LoginForm/LoginForm";
import { LoginForm } from "../../components/organisms/LoginForm/LoginForm";
import { SocialLoginGroup } from "../../components/organisms/SocialLoginGroup/SocialLoginGroup";
import { AuthLayout } from "../../components/templates/AuthLayout/AuthLayout";

export function LoginPage() {
	const handleLoginSubmit = (values: LoginValues) => {
		console.log("Login submitted:", values);
	};

	const handleSocialLogin = (provider: string) => {
		console.log("Social login with:", provider);
	};

	return (
		<AuthLayout banner={<AuthBanner imageSrc={loginBanner} />}>
			<LoginForm onSubmit={handleLoginSubmit} />

			<OrDivider />

			<SocialLoginGroup onSocialLogin={handleSocialLogin} />

			<div className="mt-10 flex flex-col items-center gap-4">
				<p className="text-white text-sm font-medium">Ainda não tem conta?</p>
				<Link to="/cadastro" className="flex items-center gap-2 group">
					Crie seu cadastro!
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
						<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
					</svg>
				</Link>
			</div>
		</AuthLayout>
	);
}
