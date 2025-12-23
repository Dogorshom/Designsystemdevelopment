import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MapPin, Phone, MessageCircle, Navigation, ChevronUp } from 'lucide-react';
import { Button } from '../components/Button';

export function OrderAcceptedScreen() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/active-order-ontheway');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-100">
      {/* Map Section (20%) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          height: '40%'
        }}
      >
        {/* Map Markers */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-4xl">
          📍
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl">
          🚗
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
                <p className="text-sm text-neutral-600">Order Accepted!</p>
                <p className="font-semibold">Ahmed Mohamed • Battery Replacement</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-success-light flex items-center justify-center">
                <CheckCircle2 size={32} className="text-success" strokeWidth={2.5} />
              </div>
            </div>
          )}

          {/* Expanded State */}
          {isExpanded && (
            <div className="flex flex-col items-center justify-center h-full">
          {/* Success Animation */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full bg-success-light flex items-center justify-center animate-[pulse_1s_ease-in-out]">
              <CheckCircle2 size={80} className="text-success" strokeWidth={2.5} />
            </div>
            {/* Expanding circles */}
            <div className="absolute inset-0 rounded-full bg-success/20 animate-[pulse_1s_ease-in-out_0.2s]" />
            <div className="absolute inset-0 rounded-full bg-success/10 animate-[pulse_1s_ease-in-out_0.4s]" />
          </div>

          {/* Text */}
          <h2 className="text-neutral-900 mb-2">Order Accepted!</h2>
          <p className="text-neutral-600 text-lg mb-8">Navigate to customer location</p>

          {/* Customer Quick Info */}
          <div className="w-full bg-neutral-100 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-4 mb-3">
              <img
                src="https://images.unsplash.com/photo-1690162396384-6741ab2f33bd?w=50&h=50&fit=crop"
                alt="Customer"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h6 className="mb-1">Ahmed Mohamed</h6>
                <p className="text-sm text-neutral-600">🔋 Battery Replacement</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-neutral-600 mt-0.5" />
              <p className="text-sm text-neutral-700">Al Olaya District, Riyadh</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="w-full grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center gap-2 p-4 bg-success-light rounded-xl">
              <Phone size={24} className="text-success" />
              <span className="text-sm">Call</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-info-light rounded-xl">
              <MessageCircle size={24} className="text-info" />
              <span className="text-sm">Chat</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-brand-secondary/10 rounded-xl">
              <Navigation size={24} className="text-brand-secondary" />
              <span className="text-sm">Navigate</span>
            </button>
          </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
