import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { OrderTimeline } from '../components/OrderTimeline';
import { StatusPill } from '../components/StatusPill';
import { Card } from '../components/Card';
import { Phone, MessageCircle, Clock, Play, Pause } from 'lucide-react';

export function ServiceInProgressScreen() {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-100">
      {/* Map Background (dimmed) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          height: '40%'
        }}
      />

      {/* Content Sheet */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-t-[32px] mt-32 safe-area-bottom overflow-y-auto">
        <div className="w-10 h-1 bg-neutral-400 rounded-full mx-auto my-3" />

        <div className="px-5 pb-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Order ID</p>
              <h6>#RSA-12345</h6>
            </div>
            <StatusPill status="info">In Progress</StatusPill>
          </div>

          {/* Timeline */}
          <OrderTimeline currentStep="inprogress" />

          {/* Timer Card */}
          <Card className="gradient-hero mb-4">
            <div className="text-center py-6">
              <p className="text-neutral-300 mb-2">Service Duration</p>
              <h1 className="text-white mb-4">{formatTime(duration)}</h1>
              <div className="flex items-center justify-center gap-2 text-neutral-300 text-sm">
                <Clock size={16} />
                <span>Started at 10:45 AM</span>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors"
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
                {isPaused ? 'Resume' : 'Pause'} Timer
              </button>
            </div>
          </Card>

          {/* Service Details */}
          <Card className="mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning-light flex items-center justify-center text-2xl">
                🔋
              </div>
              <div className="flex-1">
                <h6 className="mb-1">Battery Replacement</h6>
                <p className="text-sm text-neutral-600 mb-2">Quick Service</p>
                <div className="space-y-1">
                  <p className="text-sm text-neutral-700">Customer: Ahmed Mohamed</p>
                  <p className="text-sm text-neutral-700">Vehicle: Toyota Camry 2020</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="flex items-center justify-center gap-2 p-4 bg-success-light rounded-xl">
              <Phone size={20} className="text-success" />
              <span>Call Customer</span>
            </button>
            <button
              onClick={() => navigate('/chat')}
              className="flex items-center justify-center gap-2 p-4 bg-info-light rounded-xl"
            >
              <MessageCircle size={20} className="text-info" />
              <span>Chat</span>
            </button>
          </div>

          {/* Notes Section */}
          <Card className="bg-neutral-100 mb-4">
            <h6 className="mb-3">Service Notes</h6>
            <textarea
              placeholder="Add any notes about the service..."
              className="w-full p-3 bg-white rounded-xl border-2 border-transparent focus:border-brand-secondary outline-none resize-none"
              rows={3}
            />
          </Card>

          {/* Primary CTA */}
          <Button
            className="w-full"
            onClick={() => navigate('/after-service-photos')}
          >
            COMPLETE SERVICE
          </Button>
        </div>
      </div>
    </div>
  );
}
