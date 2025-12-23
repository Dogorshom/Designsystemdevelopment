import React from 'react';

interface TimelineStep {
  label: string;
  completed: boolean;
}

interface OrderTimelineProps {
  currentStep: 'accepted' | 'ontheway' | 'arrived' | 'inprogress' | 'completed';
}

export function OrderTimeline({ currentStep }: OrderTimelineProps) {
  const steps: TimelineStep[] = [
    { label: 'Accepted', completed: true },
    { label: 'On Way', completed: currentStep !== 'accepted' },
    { label: 'Arrived', completed: ['arrived', 'inprogress', 'completed'].includes(currentStep) },
    { label: 'Complete', completed: currentStep === 'completed' }
  ];

  return (
    <div className="py-4">
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-neutral-300" />
        
        {/* Progress line */}
        <div 
          className="absolute top-3 left-0 h-0.5 bg-brand-secondary transition-all duration-500"
          style={{ 
            width: `${(steps.filter(s => s.completed).length - 1) / (steps.length - 1) * 100}%` 
          }}
        />

        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center" style={{ width: '25%' }}>
            {/* Circle */}
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 transition-all ${
                step.completed
                  ? 'bg-brand-secondary border-brand-secondary'
                  : 'bg-white border-neutral-300'
              }`}
            >
              {step.completed && <div className="w-2 h-2 bg-white rounded-full" />}
            </div>
            {/* Label */}
            <p className={`text-xs mt-2 text-center ${
              step.completed ? 'text-brand-secondary' : 'text-neutral-500'
            }`}>
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
