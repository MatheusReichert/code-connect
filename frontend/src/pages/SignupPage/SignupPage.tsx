import signupBanner from '../../assets/signup_banner.png';
import { Link } from '../../components/atoms/Link/Link';
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner';
import type { SignupValues } from '../../components/organisms/SignupForm/SignupForm';
import { SignupForm } from '../../components/organisms/SignupForm/SignupForm';
import { AuthLayout } from '../../components/templates/AuthLayout/AuthLayout';

export function SignupPage() {
  const handleSignupSubmit = (values: SignupValues) => {
    console.log('Signup submitted:', values);
  };

  return (
    <AuthLayout banner={<AuthBanner imageSrc={signupBanner} />}>
      <SignupForm onSubmit={handleSignupSubmit} />
      
      <div className="mt-10 flex flex-col items-center gap-4">
        <p className="text-white text-sm font-medium">Já tem conta?</p>
        <Link to="/login" className="flex items-center gap-2 group">
          Faça seu login!
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </Link>
      </div>
    </AuthLayout>
  );
}
