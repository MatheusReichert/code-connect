import { Logo } from '../../atoms/Logo/Logo';

interface AuthBannerProps {
  imageSrc: string;
}

export function AuthBanner({ imageSrc }: AuthBannerProps) {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-0 bg-bg-card overflow-hidden">
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-base/80 to-transparent" />
      <div className="absolute top-10 left-10 z-10">
        <Logo variant="large" />
      </div>
    </div>
  );
}
