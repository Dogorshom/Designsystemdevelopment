import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { AlertTriangle } from 'lucide-react';

export function DeclineOrderScreen() {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState('');

  const reasons = [
    'Too far away',
    'Currently busy',
    'Vehicle issue',
    'Other reason'
  ];

  const handleDecline = () => {
    navigate('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-[fadeIn_200ms]">
      <div className="bg-white rounded-3xl p-6 w-[90%] max-w-sm animate-[slideUp_300ms]">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-warning-light flex items-center justify-center mx-auto mb-4">
          <AlertTriangle size={32} className="text-warning" />
        </div>

        {/* Title & Description */}
        <h5 className="text-center mb-2">Decline this order?</h5>
        <p className="text-center text-neutral-600 mb-6">
          This order will be assigned to another provider nearby.
        </p>

        {/* Reason Selection */}
        <div className="space-y-2 mb-6">
          <p className="text-sm text-neutral-700 mb-3">Reason (optional):</p>
          {reasons.map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-3 p-3 rounded-xl border-2 border-neutral-300 hover:border-brand-secondary cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name="reason"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-5 h-5 accent-brand-secondary"
              />
              <span>{reason}</span>
            </label>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 bg-error hover:bg-error/90"
            onClick={handleDecline}
          >
            Decline Order
          </Button>
        </div>
      </div>
    </div>
  );
}
