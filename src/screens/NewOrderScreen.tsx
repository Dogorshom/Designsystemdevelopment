import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { MapPin, Clock, Package, DollarSign } from 'lucide-react';

export function NewOrderScreen() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          navigate('/dashboard');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const handleAccept = () => {
    navigate('/active-order');
  };

  const handleDecline = () => {
    navigate('/dashboard');
  };

  // Calculate progress for animated ring
  const progress = ((15 - timeLeft) / 15) * 283; // 283 is circumference of circle with r=45

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Pulsing Background Effect */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 z-10">
        <div className="absolute inset-0 rounded-full bg-brand-secondary/20 animate-[pulse_2s_ease-in-out_infinite]" />
        <div className="absolute inset-2 rounded-full bg-brand-secondary/10 animate-[pulse_2s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Countdown Timer */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-28 h-28">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="45"
              stroke="white"
              strokeWidth="4"
              fill="none"
              opacity="0.2"
            />
            {/* Progress Circle */}
            <circle
              cx="56"
              cy="56"
              r="45"
              stroke="#FF6B6B"
              strokeWidth="4"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset={progress}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          {/* Timer Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{timeLeft}</div>
              <div className="text-xs text-white/80">seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] safe-area-bottom animate-[slideUp_400ms]">
        <div className="w-10 h-1 bg-neutral-400 rounded-full mx-auto mt-3 mb-4" />
        
        <div className="px-5 pb-6">
          <div className="flex items-center justify-between mb-6">
            <h4>New Order Request</h4>
            <div className="px-3 py-1.5 bg-warning-light rounded-lg">
              <span className="text-warning">Urgent</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-info-light flex items-center justify-center flex-shrink-0">
                <Package size={22} className="text-info" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">Order ID</p>
                <h6>#54321</h6>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-success-light flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-success" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">Pickup Location</p>
                <p>City Centre Mall, Deira</p>
                <p className="text-xs text-neutral-500 mt-1">Ground Floor, Gate 3</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-warning-light flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">Drop Location</p>
                <p>Dubai Marina - Tower 3</p>
                <p className="text-xs text-neutral-500 mt-1">Apt 502, 5th Floor</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-neutral-200 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-neutral-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-neutral-600 mb-1">Estimated Time</p>
                <p>25 minutes • 8.5 km</p>
              </div>
            </div>
          </div>

          {/* Earnings Highlight */}
          <div className="flex items-center justify-between p-4 gradient-action rounded-2xl mb-6">
            <div className="flex items-center gap-2">
              <DollarSign size={24} className="text-white" />
              <span className="text-white">Estimated Earnings</span>
            </div>
            <span className="text-2xl font-bold text-white">AED 35</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1 h-14" onClick={handleDecline}>
              Decline
            </Button>
            <Button className="flex-1 h-14" onClick={handleAccept}>
              Accept Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}