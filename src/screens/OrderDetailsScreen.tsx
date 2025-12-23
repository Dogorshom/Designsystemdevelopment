import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MapPin, Phone, Clock, DollarSign, Camera, ChevronDown, ChevronUp } from 'lucide-react';

export function OrderDetailsScreen() {
  const navigate = useNavigate();
  const [showTimeline, setShowTimeline] = useState(false);

  const beforePhotos = [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop&brightness=1.1'
  ];

  const afterPhotos = [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop&brightness=1.1'
  ];

  const timeline = [
    { event: 'Order received', time: '10:28 AM' },
    { event: 'Accepted', time: '10:30 AM' },
    { event: 'On the way', time: '10:31 AM' },
    { event: 'Arrived', time: '10:40 AM' },
    { event: 'Service started', time: '10:42 AM' },
    { event: 'Completed', time: '10:55 AM' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 pb-6">
      <Header showBack title="Order Details" />

      <div className="screen-padding py-6 space-y-4">
        {/* Status Banner */}
        <div className="bg-success text-white rounded-2xl p-4 text-center">
          <h6 className="mb-1">✓ Completed</h6>
          <p className="text-sm text-white/80">Order successfully completed</p>
        </div>

        {/* Order Summary */}
        <Card>
          <h6 className="mb-4">Order Summary</h6>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral-600">Order ID</span>
              <span className="font-semibold">#RSA-12345</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Date</span>
              <span>Dec 20, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Time</span>
              <span>10:30 AM - 10:55 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Duration</span>
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-neutral-600" />
                <span>25 minutes</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-300">
              <span className="text-neutral-600">Status</span>
              <span className="px-3 py-1 bg-success-light text-success rounded-full text-sm">
                Completed ✓
              </span>
            </div>
          </div>
        </Card>

        {/* Service Details */}
        <Card>
          <h6 className="mb-4">Service Details</h6>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-warning-light flex items-center justify-center text-2xl">
              🔋
            </div>
            <div className="flex-1">
              <h6 className="mb-1">Battery Replacement</h6>
              <p className="text-sm text-neutral-600">Quick Service</p>
            </div>
          </div>
        </Card>

        {/* Customer Info */}
        <Card>
          <h6 className="mb-4">Customer Information</h6>
          <div className="flex items-start gap-4 mb-4">
            <img
              src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customer"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h6 className="mb-1">Ahmed Mohamed</h6>
              <button className="flex items-center gap-2 text-brand-secondary text-sm">
                <Phone size={16} />
                +966 50 123 4567
              </button>
            </div>
          </div>
          <div className="bg-neutral-100 rounded-xl p-3 space-y-1">
            <p className="text-sm"><span className="text-neutral-600">Vehicle:</span> Toyota Camry 2020</p>
            <p className="text-sm"><span className="text-neutral-600">Color:</span> White</p>
            <p className="text-sm"><span className="text-neutral-600">Plate:</span> ABC 1234</p>
          </div>
        </Card>

        {/* Location */}
        <Card>
          <h6 className="mb-4">Location</h6>
          <div className="flex items-start gap-3 mb-3">
            <MapPin size={20} className="text-neutral-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <p>Al Olaya District, Riyadh</p>
              <p className="text-sm text-neutral-600 mt-1">King Fahd Road, near Faisaliah Tower</p>
            </div>
          </div>
          <div className="h-32 bg-neutral-300 rounded-xl flex items-center justify-center">
            <span className="text-neutral-600">🗺️ Map Preview</span>
          </div>
          <button className="w-full mt-3 text-brand-secondary text-sm">
            View in Maps →
          </button>
        </Card>

        {/* Photos Section */}
        <Card>
          <h6 className="mb-4">Service Photos</h6>
          
          {/* Before Photos */}
          <div className="mb-4">
            <p className="text-sm text-neutral-600 mb-2">Before Service</p>
            <div className="flex gap-2 overflow-x-auto">
              {beforePhotos.map((photo, index) => (
                <div key={index} className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-200">
                  <img src={photo} alt={`Before ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* After Photos */}
          <div>
            <p className="text-sm text-neutral-600 mb-2">After Service</p>
            <div className="flex gap-2 overflow-x-auto">
              {afterPhotos.map((photo, index) => (
                <div key={index} className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-200">
                  <img src={photo} alt={`After ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Payment Breakdown */}
        <Card>
          <h6 className="mb-4">Payment Breakdown</h6>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral-700">Battery Replacement</span>
              <span>SAR 120.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-700">Service Fee</span>
              <span>SAR 30.00</span>
            </div>
            <div className="h-px bg-neutral-300 my-2" />
            <div className="flex justify-between items-center pt-2">
              <span>Total</span>
              <div className="flex items-center gap-1">
                <DollarSign size={18} className="text-success" />
                <span className="text-xl font-bold text-success">SAR 150.00</span>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Payment Method</span>
              <span className="text-neutral-900">Cash</span>
            </div>
          </div>
        </Card>

        {/* Timeline (Collapsible) */}
        <Card>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="w-full flex items-center justify-between"
          >
            <h6>Order Timeline</h6>
            {showTimeline ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {showTimeline && (
            <div className="mt-4 space-y-3">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-brand-secondary mt-2" />
                    {index < timeline.length - 1 && (
                      <div className="absolute left-1 top-4 w-px h-8 bg-neutral-300" />
                    )}
                  </div>
                  <div className="flex-1 flex justify-between items-start pt-0.5">
                    <span className="text-neutral-700">{item.event}</span>
                    <span className="text-sm text-neutral-600">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="secondary" className="w-full">
            Report Issue
          </Button>
          <button
            onClick={() => navigate('/support')}
            className="w-full text-brand-secondary py-3"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
