import { SocialLoginButton } from '../../molecules/SocialLoginButton/SocialLoginButton';

interface SocialLoginGroupProps {
  onSocialLogin: (provider: 'github' | 'gmail') => void;
}

export function SocialLoginGroup({ onSocialLogin }: SocialLoginGroupProps) {
  return (
    <div className="flex justify-center gap-10 w-full">
      <SocialLoginButton
        provider="github"
        onClick={() => onSocialLogin('github')}
      />
      <SocialLoginButton
        provider="gmail"
        onClick={() => onSocialLogin('gmail')}
      />
    </div>
  );
}
