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
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center shadow-lg">
          <Package size={40} className="text-brand-secondary" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-brand-secondary">Fazaa</h1>
          <p className="text-sm text-neutral-500">Service providers platform</p>
        </div>
      </div>
      <div className="w-48 h-2 bg-neutral-100 rounded-full overflow-hidden shadow-inner">
        <div className="h-full bg-gradient-action animate-[slideInFromLeft_1.5s_ease-out]" />
      </div>
    </div>
  );
}
