import { AuthLayout } from '../../components/templates/AuthLayout/AuthLayout';
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner';
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm';
import { SocialLoginGroup } from '../../components/organisms/SocialLoginGroup/SocialLoginGroup';
import { OrDivider } from '../../components/molecules/OrDivider/OrDivider';
import { Link } from '../../components/atoms/Link/Link';
import type { LoginValues } from '../../components/organisms/LoginForm/LoginForm';
import loginBanner from '../../assets/login_banner.png';

export function LoginPage() {
  const handleLoginSubmit = (values: LoginValues) => {
    console.log('Login submitted:', values);
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Social login with:', provider);
  };

  return (
    <AuthLayout banner={<AuthBanner imageSrc={loginBanner} />}>
      <LoginForm onSubmit={handleLoginSubmit} />
      <OrDivider />
      <SocialLoginGroup onSocialLogin={handleSocialLogin} />
      
      <p className="mt-8 text-muted">
        Não tem conta? <Link to="/cadastro">Crie seu cadastro!</Link>
      </p>
    </AuthLayout>
  );
}
