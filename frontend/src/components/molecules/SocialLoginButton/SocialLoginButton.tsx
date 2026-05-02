import { Button } from '../../atoms/Button/Button';
import githubIcon from '../../../assets/github.png';
import gmailIcon from '../../../assets/gmail.png';

export interface SocialLoginButtonProps {
  provider: 'github' | 'gmail';
  onClick?: () => void;
}

export function SocialLoginButton({ provider, onClick }: SocialLoginButtonProps) {
  const providers = {
    github: {
      label: 'GitHub',
      icon: githubIcon,
    },
    gmail: {
      label: 'Google',
      icon: gmailIcon,
    },
  };

  const { label, icon } = providers[provider];

  return (
    <Button variant="social" onClick={onClick} type="button">
      <img src={icon} alt="" className="w-6 h-6" aria-hidden="true" />
      <span>{label}</span>
    </Button>
  );
}
