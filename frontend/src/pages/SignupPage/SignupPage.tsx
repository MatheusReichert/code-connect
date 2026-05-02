import { AuthLayout } from '../../components/templates/AuthLayout/AuthLayout';
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner';
import { SignupForm } from '../../components/organisms/SignupForm/SignupForm';
import { Link } from '../../components/atoms/Link/Link';
import type { SignupValues } from '../../components/organisms/SignupForm/SignupForm';
import signupBanner from '../../assets/signup_banner.png';

export function SignupPage() {
  const handleSignupSubmit = (values: SignupValues) => {
    console.log('Signup submitted:', values);
  };

  return (
    <AuthLayout banner={<AuthBanner imageSrc={signupBanner} />}>
      <SignupForm onSubmit={handleSignupSubmit} />
      
      <p className="mt-8 text-muted">
        Já tem conta? <Link to="/login">Faça seu login!</Link>
      </p>
    </AuthLayout>
  );
}
