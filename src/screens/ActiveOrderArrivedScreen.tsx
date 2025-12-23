import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { OrderTimeline } from '../components/OrderTimeline';
import { StatusPill } from '../components/StatusPill';
import { Card } from '../components/Card';
import { Phone, MessageCircle, Navigation, CheckCircle2, Clock, ChevronUp } from 'lucide-react';

export function ActiveOrderArrivedScreen() {
  const navigate = useNavigate();
  const [waitTime] = useState('2 min ago');
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-100">
      {/* Map Section (20%) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          height: '30%',
          filter: 'brightness(0.9)'
        }}
      >
        {/* Customer marker at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="text-5xl animate-bounce">📍</div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap text-xs">
              Customer here
            </div>
          </div>
        </div>

        {/* Provider nearby */}
        <div className="absolute bottom-1/4 left-1/2 text-3xl">
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
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] transition-all duration-300 flex flex-col ${
          isExpanded ? 'h-[70vh]' : 'h-[25vh]'
        }`}
      >
        {/* Draggable Handle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 flex justify-center flex-shrink-0"
        >
          <div className="w-10 h-1 bg-neutral-400 rounded-full" />
          <ChevronUp
            size={20}
            className={`absolute right-5 text-neutral-500 transition-transform ${
              isExpanded ? '' : 'rotate-180'
            }`}
          />
        </button>

        <div className="px-5 pb-6 overflow-y-auto flex-1 safe-area-bottom">
          {/* Collapsed State */}
          {!isExpanded && (
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm text-neutral-600">Order #RSA-12345</p>
                <p className="font-semibold">Ahmed Mohamed • Battery Replacement</p>
              </div>
              <StatusPill status="info">Arrived</StatusPill>
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
            <StatusPill status="info">Arrived</StatusPill>
          </div>

          {/* Timeline */}
          <OrderTimeline currentStep="arrived" />

          {/* Notification Card */}
          <Card className="bg-success-light border-2 border-success/20 mb-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-success flex-shrink-0 mt-0.5" />
              <div>
                <h6 className="text-success mb-1">Customer Notified</h6>
                <p className="text-sm text-neutral-700">
                  Ahmed has been notified of your arrival
                </p>
              </div>
            </div>
          </Card>

          {/* Wait Time Indicator */}
          {/* <Card className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-neutral-600" />
                <span className="text-neutral-700">Waiting time</span>
              </div>
              <span>{waitTime}</span>
            </div>
          </Card> */}

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
                <p className="text-sm text-neutral-600 mb-2">🔋 Battery Replacement</p>
                <p className="text-sm text-neutral-700">Toyota Camry 2020 • White • ABC 1234</p>
              </div>
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
            className="w-full"
            onClick={() => navigate('/before-service-photos')}
          >
            START SERVICE
          </Button>
          </>
          )}
        </div>
      </div>
    </div>
  );
}
