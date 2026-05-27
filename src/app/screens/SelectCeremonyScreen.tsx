import { useState } from 'react';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { PrimaryButton } from '../components/PrimaryButton';
import { ChevronLeft } from 'lucide-react';

interface SelectCeremonyScreenProps {
  onBack: () => void;
  onContinue: (ceremony: string) => void;
}

const ceremonies = [
  { id: 'wedding', label: 'Wedding', icon: '💍' },
  { id: 'engagement', label: 'Engagement', icon: '💐' },
  { id: 'annaprashan', label: 'Annaprashan', icon: '🍚' },
  { id: 'shraddh', label: 'Shraddh', icon: '🕉️' },
  { id: 'puja', label: 'Puja', icon: '🪔' },
  { id: 'funeral', label: 'Funeral', icon: '🙏' },
  { id: 'thread-ceremony', label: 'Thread Ceremony', icon: '🧵' },
  { id: 'griha-pravesh', label: 'Griha Pravesh', icon: '🏠' },
  { id: 'anniversary', label: 'Anniversary', icon: '🎉' },
  { id: 'other', label: 'Other Ceremony', icon: '✨' },
];

export function SelectCeremonyScreen({ onBack, onContinue }: SelectCeremonyScreenProps) {
  const [selectedCeremony, setSelectedCeremony] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedCeremony) {
      onContinue(selectedCeremony);
    }
  };

  return (
    <div className="h-screen bg-[#FFFDF8] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#F3F4F6]">
        <div className="h-14 flex items-center px-4">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center -ml-2"
          >
            <ChevronLeft className="w-6 h-6 text-[#1F2937]" />
          </button>
        </div>
        <ProgressIndicator currentStep={1} totalSteps={3} />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-6">
        <div className="max-w-md mx-auto">
          {/* Question */}
          <h2
            className="font-semibold text-[#1F2937] mb-2"
            style={{ fontSize: '24px', lineHeight: '32px' }}
          >
            Which ceremony do you want to plan?
          </h2>
          <p
            className="text-[#6B7280] mb-8"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            Choose one to personalize your vendor recommendations.
          </p>

          {/* Ceremony Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {ceremonies.map((ceremony) => (
              <button
                key={ceremony.id}
                onClick={() => setSelectedCeremony(ceremony.id)}
                className={`
                  p-4 rounded-[16px] border-2 transition-all duration-200
                  ${
                    selectedCeremony === ceremony.id
                      ? 'border-[#F97316] bg-[#FFF7ED] shadow-[0_2px_8px_rgba(249,115,22,0.15)]'
                      : 'border-[#E5E7EB] bg-white hover:border-[#F97316]/30'
                  }
                `}
              >
                <div className="text-4xl mb-3">{ceremony.icon}</div>
                <p
                  className={`font-semibold ${
                    selectedCeremony === ceremony.id
                      ? 'text-[#F97316]'
                      : 'text-[#1F2937]'
                  }`}
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  {ceremony.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-6 bg-white border-t border-[#F3F4F6] pt-4">
        <PrimaryButton onClick={handleContinue} disabled={!selectedCeremony}>
          Continue
        </PrimaryButton>
      </div>
    </div>
  );
}
