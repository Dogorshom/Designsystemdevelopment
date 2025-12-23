import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export function OrderAcceptedScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/active-order-ontheway');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen gradient-hero flex flex-col items-center justify-center">
      {/* Success Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-success-light flex items-center justify-center animate-[pulse_1s_ease-in-out]">
          <CheckCircle2 size={80} className="text-success" strokeWidth={2.5} />
        </div>
        {/* Expanding circles */}
        <div className="absolute inset-0 rounded-full bg-success/20 animate-[pulse_1s_ease-in-out_0.2s]" />
        <div className="absolute inset-0 rounded-full bg-success/10 animate-[pulse_1s_ease-in-out_0.4s]" />
      </div>

      {/* Text */}
      <h2 className="text-white mb-2">Order Accepted!</h2>
      <p className="text-neutral-300 text-lg">Navigate to customer location</p>
    </div>
  );
}
