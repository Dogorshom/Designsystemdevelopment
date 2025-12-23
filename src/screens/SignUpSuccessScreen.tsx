import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { CheckCircle2, Sparkles } from 'lucide-react';

export function SignUpSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen gradient-hero flex flex-col items-center justify-center screen-padding">
      {/* Success Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle2 size={64} className="text-brand-tertiary" strokeWidth={2} />
          </div>
        </div>
        {/* Sparkles */}
        <Sparkles className="absolute -top-2 -right-2 text-brand-tertiary animate-[pulse_2s_ease-in-out_infinite]" size={24} />
        <Sparkles className="absolute -bottom-2 -left-2 text-brand-tertiary animate-[pulse_2s_ease-in-out_infinite_1s]" size={20} />
      </div>

      {/* Success Message */}
      <div className="text-center mb-12">
        <h2 className="text-white mb-3">Awesome!</h2>
        <p className="text-neutral-300 text-lg mb-2">
          Account created successfully
        </p>
        <p className="text-neutral-400 max-w-sm">
          Your documents have been submitted for verification. You'll receive a notification once approved.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3">
        <Button className="w-full" onClick={() => navigate('/dashboard')}>
          Get Started
        </Button>
        <button
          onClick={() => navigate('/personal-documents')}
          className="w-full text-white/80 py-3"
        >
          Review Documents
        </button>
      </div>
    </div>
  );
}
