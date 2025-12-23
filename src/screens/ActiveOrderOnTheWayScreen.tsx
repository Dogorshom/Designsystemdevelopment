import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { OrderTimeline } from '../components/OrderTimeline';
import { StatusPill } from '../components/StatusPill';
import { Phone, MessageCircle, Navigation, ChevronUp } from 'lucide-react';

export function ActiveOrderOnTheWayScreen() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-100">
      {/* Map Section (60%) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          height: '60%'
        }}
      >
        {/* Map Markers */}
        <div className="absolute top-1/4 right-1/3 text-4xl animate-[pulse_2s_ease-in-out_infinite]">
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

      {/* Draggable Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] safe-area-bottom transition-all duration-300 ${
          isExpanded ? 'h-[55%]' : 'h-[20%]'
        }`}
      >
        {/* Handle */}
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

        <div className="px-5 overflow-y-auto" style={{ maxHeight: 'calc(100% - 60px)' }}>
          {/* Collapsed State */}
          {!isExpanded && (
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-neutral-600">Order #RSA-12345</p>
                <p>Ahmed Mohamed • Battery Replacement</p>
              </div>
              <StatusPill status="info">On The Way</StatusPill>
            </div>
          )}

          {/* Expanded State */}
          {isExpanded && (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-neutral-600 mb-1">Order ID</p>
                  <h6>#RSA-12345</h6>
                </div>
                <StatusPill status="info">On The Way</StatusPill>
              </div>

              {/* Timeline */}
              <OrderTimeline currentStep="ontheway" />

              {/* Customer Card */}
              <div className="bg-neutral-100 rounded-2xl p-4 mb-4">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1690162396384-6741ab2f33bd?w=50&h=50&fit=crop"
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h6 className="mb-1">Ahmed Mohamed</h6>
                    <p className="text-sm text-neutral-600 mb-2">🔋 Battery Replacement</p>
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-700">Toyota Camry 2020 • White</p>
                      <p className="text-sm text-neutral-700">Plate: ABC 1234</p>
                    </div>
                  </div>
                </div>

                {/* Customer Note */}
                <div className="bg-warning-light border-l-4 border-warning rounded-lg p-3">
                  <p className="text-sm text-neutral-700">
                    💡 "Car stopped near the gas station on King Fahd Road"
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <button className="flex flex-col items-center gap-2 p-4 bg-success-light rounded-xl">
                  <Phone size={24} className="text-success" />
                  <span className="text-sm">Call</span>
                </button>
                <button
                  onClick={() => navigate('/chat')}
                  className="flex flex-col items-center gap-2 p-4 bg-info-light rounded-xl"
                >
                  <MessageCircle size={24} className="text-info" />
                  <span className="text-sm">Chat</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-brand-secondary/10 rounded-xl">
                  <Navigation size={24} className="text-brand-secondary" />
                  <span className="text-sm">Navigate</span>
                </button>
              </div>

              {/* Primary CTA */}
              <Button
                className="w-full mb-4"
                onClick={() => navigate('/active-order-arrived')}
              >
                I'VE ARRIVED
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
