import type { ReactNode } from 'react';

interface AuthLayoutProps {
  banner: ReactNode;
  children: ReactNode;
}

export function AuthLayout({ banner, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-bg-base overflow-x-hidden">
      {/* Banner Column */}
      <div className="w-full lg:w-1/2 lg:h-screen sticky top-0">
        {banner}
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
