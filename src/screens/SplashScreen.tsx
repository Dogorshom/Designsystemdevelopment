import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen gradient-hero flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 mb-12">
        <Package size={64} className="text-brand-tertiary" strokeWidth={2} />
        <h1 className="text-white">Fazaa</h1>
      </div>
      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-action animate-[slideInFromLeft_1.5s_ease-out]" />
      </div>
    </div>
  );
}
