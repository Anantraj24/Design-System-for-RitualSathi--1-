import { Loader2 } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative corner motifs */}
      <div className="absolute top-0 left-0 w-20 h-20 opacity-5">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q40 0 40 40 T0 80" stroke="#F97316" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="40" r="3" fill="#22A55A"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 rotate-180">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q40 0 40 40 T0 80" stroke="#F97316" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="40" r="3" fill="#22A55A"/>
        </svg>
      </div>

      {/* Logo */}
      <div className="text-center mb-16">
        <div className="mb-4">
          <h1 className="text-5xl font-bold mb-1">
            <span style={{ color: '#F97316' }}>Ritual</span>
            <span style={{ color: '#22A55A' }}>Sathi</span>
          </h1>
        </div>
        <p
          className="text-[#6B7280]"
          style={{ fontSize: '16px', lineHeight: '24px' }}
        >
          Plan every ceremony, effortlessly.
        </p>
      </div>

      {/* Loading spinner */}
      <div className="mt-8">
        <Loader2
          className="w-8 h-8 animate-spin"
          style={{ color: '#F97316' }}
        />
      </div>
    </div>
  );
}
