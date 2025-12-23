import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { BottomSheet } from '../components/BottomSheet';
import { MapPin, Phone, Navigation, CheckCircle2, Circle } from 'lucide-react';

export function ActiveOrderScreen() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(true);

  const timeline = [
    { label: 'Order Accepted', completed: true },
    { label: 'Arrived at Pickup', completed: true },
    { label: 'Package Collected', completed: true },
    { label: 'In Transit', completed: false },
    { label: 'Delivered', completed: false }
  ];

  return (
    <div className="h-screen relative">
      {/* Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MjU1OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 safe-area-top">
        <Header showBack title="Order #54321" />
      </div>

      {/* Navigation FAB */}
      <button className="absolute top-32 right-5 w-14 h-14 rounded-full gradient-action shadow-2xl flex items-center justify-center z-20">
        <Navigation size={24} className="text-white" />
      </button>

      {/* Bottom Sheet */}
      <BottomSheet isOpen={showDetails} onClose={() => setShowDetails(false)} title="Order Details">
        <div className="space-y-6">
          {/* Customer Info */}
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1690162396384-6741ab2f33bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGF2YXRhciUyMHdvbWFufGVufDF8fHx8MTc2NjI1NTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Customer"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h5 className="mb-1">Sarah Ahmed</h5>
              <p className="text-sm text-neutral-600">Customer</p>
            </div>
            <button className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
              <Phone size={20} className="text-white" />
            </button>
          </div>

          {/* Timeline */}
          <div>
            <h6 className="mb-4">Order Status</h6>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="relative">
                    {item.completed ? (
                      <CheckCircle2 size={24} className="text-success" />
                    ) : (
                      <Circle size={24} className="text-neutral-400" />
                    )}
                    {index < timeline.length - 1 && (
                      <div className={`absolute left-3 top-6 w-0.5 h-8 ${
                        item.completed ? 'bg-success' : 'bg-neutral-300'
                      }`} />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <p className={item.completed ? 'text-neutral-900' : 'text-neutral-500'}>
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-success-light rounded-xl">
              <MapPin size={20} className="text-success mt-1" />
              <div>
                <p className="text-sm text-neutral-600 mb-1">Pickup</p>
                <p>City Centre Mall, Deira</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-warning-light rounded-xl">
              <MapPin size={20} className="text-warning mt-1" />
              <div>
                <p className="text-sm text-neutral-600 mb-1">Drop-off</p>
                <p>Dubai Marina - Tower 3, Apt 502</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full" onClick={() => navigate('/order-steps')}>
              Mark as Delivered
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => navigate('/chat')}>
              Contact Customer
            </Button>
          </div>
        </div>
      </BottomSheet>

      {!showDetails && (
        <button
          onClick={() => setShowDetails(true)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl z-10"
        >
          View Order Details
        </button>
      )}
    </div>
  );
}
