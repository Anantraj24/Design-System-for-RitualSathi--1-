import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { Sparkles, Users, CheckCircle, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin }: WelcomeScreenProps) {
  return (
    <div className="h-full bg-[#FFFDF8] flex flex-col justify-between overflow-y-auto">
      {/* Logo at top */}
      <div className="pt-8 sm:pt-12 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span style={{ color: '#F97316' }}>Ritual</span>
          <span style={{ color: '#22A55A' }}>Sathi</span>
        </h1>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col justify-center px-6 my-4">
        {/* Hero text */}
        <div className="text-center mb-4 sm:mb-8">
          <h2
            className="font-semibold text-[#1F2937] mb-2 sm:mb-3 text-2xl sm:text-[28px]"
            style={{ lineHeight: '1.25' }}
          >
            Plan Indian ceremonies without stress
          </h2>
          <p
            className="text-[#6B7280] max-w-sm mx-auto text-sm sm:text-base"
            style={{ lineHeight: '1.5' }}
          >
            Find trusted priests, decorators, caterers, photographers and venues near you.
          </p>
        </div>

        {/* Illustration area */}
        <div className="bg-white rounded-[20px] p-4 sm:p-8 mb-4 sm:mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-6">
            <div className="bg-[#FFF7ED] rounded-[16px] p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 bg-[#F97316] rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-[#1F2937] font-medium text-xs sm:text-[13px]">
                500+ Vendors
              </p>
            </div>
            <div className="bg-[#F0FDF4] rounded-[16px] p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 bg-[#22A55A] rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-[#1F2937] font-medium text-xs sm:text-[13px]">
                All Verified
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-[#EFF6FF] rounded-[16px] p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 bg-[#60A5FA] rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-[#1F2937] font-medium text-xs sm:text-[13px]">
                Top Rated
              </p>
            </div>
            <div className="bg-[#FFFBEB] rounded-[16px] p-3 sm:p-4 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5 sm:mb-2 bg-[#FBBF24] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-[#1F2937] font-medium text-xs sm:text-[13px]">
                Premium Service
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p
          className="text-center text-[#6B7280] mb-2 sm:mb-4 text-xs sm:text-sm"
          style={{ lineHeight: '1.4' }}
        >
          Trusted ceremony planning companion
        </p>
      </div>

      {/* CTA buttons */}
      <div className="px-6 pb-6 sm:pb-10 space-y-2 sm:space-y-3">
        <PrimaryButton onClick={onGetStarted}>
          Get Started
        </PrimaryButton>
        <SecondaryButton onClick={onLogin}>
          Login
        </SecondaryButton>
      </div>
    </div>
  );
}
