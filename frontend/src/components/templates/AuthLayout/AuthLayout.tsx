import type { ReactNode } from 'react';

interface AuthLayoutProps {
  banner: ReactNode;
  children: ReactNode;
}

export function AuthLayout({ banner, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row bg-bg-card rounded-2xl overflow-hidden shadow-2xl h-auto lg:h-[700px]">
        {/* Banner Column */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-full shrink-0">
          {banner}
        </div>

        {/* Content Column - Removed scrollbar classes */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="w-full max-w-[400px] flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
