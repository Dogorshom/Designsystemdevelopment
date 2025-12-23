import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { XCircle, Clock, DollarSign, AlertCircle } from 'lucide-react';

export function OrderCancelledScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-neutral-100 flex flex-col">
      {/* Header */}
      <div className="bg-error rounded-b-[32px] px-5 pt-12 pb-8 text-center">
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
          <XCircle size={48} className="text-white" />
        </div>
        <h3 className="text-white mb-2">Order Cancelled</h3>
        <p className="text-white/80">This order has been cancelled</p>
      </div>

      <div className="flex-1 screen-padding py-6 overflow-y-auto">
        {/* Order Info */}
        <Card className="mb-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm text-neutral-600 mb-1">Order ID</p>
              <h6>#RSA-12345</h6>
            </div>
            <div className="px-3 py-1 bg-error-light rounded-lg">
              <span className="text-error text-sm">Cancelled</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Clock size={16} />
            <span>Dec 20, 2024 at 10:35 AM</span>
          </div>
        </Card>

        {/* Cancellation Details */}
        <Card className="mb-4">
          <h6 className="mb-4">Cancellation Details</h6>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral-600">Cancelled by</span>
              <span>Customer</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Reason</span>
              <span>Changed plans</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Time</span>
              <span>10:35 AM</span>
            </div>
          </div>
        </Card>

        {/* Reason Message */}
        <Card className="bg-neutral-100 mb-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Customer's reason:</p>
              <p className="text-sm text-neutral-700">
                "Sorry, I found another service provider who was closer to my location. Thank you for accepting!"
              </p>
            </div>
          </div>
        </Card>

        {/* Compensation */}
        <Card className="bg-success-light border-2 border-success/20 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-success flex items-center justify-center flex-shrink-0">
              <DollarSign size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h6 className="text-success mb-1">Cancellation Fee</h6>
              <p className="text-sm text-neutral-700 mb-2">
                You've been compensated for accepting this order
              </p>
              <p className="text-2xl font-bold text-success">+SAR 15.00</p>
            </div>
          </div>
        </Card>

        {/* Service Details (for reference) */}
        <Card className="mb-6">
          <h6 className="mb-3">Service Details</h6>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center text-2xl">
              🔋
            </div>
            <div className="flex-1">
              <p className="font-semibold mb-1">Battery Replacement</p>
              <p className="text-sm text-neutral-600 mb-2">Customer: Ahmed Mohamed</p>
              <p className="text-sm text-neutral-700">Al Olaya District, Riyadh</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Button */}
      <div className="screen-padding pb-8 safe-area-bottom">
        <Button className="w-full" onClick={() => navigate('/dashboard')}>
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
}
