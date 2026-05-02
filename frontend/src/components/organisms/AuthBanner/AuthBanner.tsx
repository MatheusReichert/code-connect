import { Logo } from '../../atoms/Logo/Logo';

interface AuthBannerProps {
  imageSrc: string;
}

export function AuthBanner({ imageSrc }: AuthBannerProps) {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-0 bg-bg-base overflow-hidden flex items-end">
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Removed the black overlay div */}
      <div className="relative z-10 p-10 w-full flex justify-center">
        <Logo variant="small" />
      </div>
    </div>
  );
}
