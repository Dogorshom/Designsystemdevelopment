import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { MapPin, DollarSign, Navigation, Clock, ChevronUp } from 'lucide-react';

export function NewOrderNotificationScreen() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(45);
  const [isExpanded, setIsExpanded] = useState(true);

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
    navigate('/order-accepted');
  };

  const handleDecline = () => {
    navigate('/decline-order');
  };

  // Calculate progress for animated ring (circumference = 2 * π * r = 2 * 3.14159 * 54 ≈ 339)
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = ((45 - timeLeft) / 45) * circumference;

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-100">
      {/* Map Background (30%) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          height: '30%'
        }}
      >
        {/* Map Markers */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-4xl animate-[pulse_2s_ease-in-out_infinite]">
          📍
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl">
          🚗
        </div>

        {/* Route Distance Indicator */}
        <div className="absolute top-1/3 right-4 bg-white px-3 py-2 rounded-lg shadow-lg">
          <p className="text-xs text-neutral-600">Distance</p>
          <p className="font-semibold">3.2 km</p>
        </div>

        {/* Floating Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center">
            +
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center">
            −
          </button>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] safe-area-bottom transition-all duration-300 ${
          isExpanded ? 'h-[70%]' : 'h-[25%]'
        }`}
      >
        {/* Draggable Handle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 flex justify-center"
        >
          <div className="w-10 h-1 bg-neutral-400 rounded-full" />
          <ChevronUp
            size={20}
            className={`absolute right-5 text-neutral-500 transition-transform ${
              isExpanded ? '' : 'rotate-180'
            }`}
          />
        </button>
        
        <div className="px-5 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(100% - 60px)' }}>
          {/* Collapsed State */}
          {!isExpanded && (
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-neutral-600">New Order Request</p>
                <p className="font-semibold">Battery Replacement • SAR 150</p>
              </div>
              <div className="relative w-16 h-16">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgba(200, 200, 200, 0.3)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#FF6B6B"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={((45 - timeLeft) / 45) * 2 * Math.PI * 28}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{timeLeft}</span>
                </div>
              </div>
            </div>
          )}

          {/* Expanded State */}
          {isExpanded && (
            <>
          {/* Header with Timer */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-neutral-600 mb-1">New Order Request</p>
              <h6>#RSA-12345</h6>
            </div>
            
            {/* Circular Countdown Timer */}
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  stroke="rgba(200, 200, 200, 0.3)"
                  strokeWidth="6"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="40"
                  cy="40"
                  r={radius}
                  stroke="#FF6B6B"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">{timeLeft}</div>
                  <div className="text-xs text-neutral-600">sec</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Info Card */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-warning-light flex items-center justify-center text-2xl">
                🔋
              </div>
              <div className="flex-1">
                <h6>Battery Replacement</h6>
                <p className="text-sm text-neutral-600">Quick Service</p>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex gap-2">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-success-light rounded-lg">
                <DollarSign size={14} className="text-success" />
                <span className="text-sm font-semibold text-success">SAR 150</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-neutral-200 rounded-lg">
                <Navigation size={14} className="text-neutral-700" />
                <span className="text-sm text-neutral-700">3.2 km</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-neutral-200 rounded-lg">
                <Clock size={14} className="text-neutral-700" />
                <span className="text-sm text-neutral-700">~8 min</span>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-4">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1690162396384-6741ab2f33bd?w=50&h=50&fit=crop"
                alt="Customer"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h6 className="mb-1">Ahmed Mohamed</h6>
                <p className="text-sm text-neutral-700 mb-2">Toyota Camry 2020 • White</p>
                <p className="text-sm text-neutral-700">Plate: ABC 1234</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 mb-6 bg-neutral-100 rounded-2xl p-4">
            <MapPin size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-neutral-600 mb-1">Customer Location</p>
              <p className="text-neutral-900">Al Olaya District, Riyadh</p>
              <p className="text-sm text-neutral-600 mt-1">King Fahd Road, near Faisaliah Tower</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full h-14 shadow-lg animate-[pulse_2s_ease-in-out_infinite]"
              onClick={handleAccept}
            >
              ACCEPT ORDER
            </Button>
            <button
              onClick={handleDecline}
              className="w-full text-neutral-600 py-3 hover:text-neutral-900 transition-colors"
            >
              Decline
            </button>
          </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
