interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2 px-6 py-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            index < currentStep
              ? 'bg-[#F97316]'
              : 'bg-[#E5E7EB]'
          }`}
        />
      ))}
    </div>
  );
}
