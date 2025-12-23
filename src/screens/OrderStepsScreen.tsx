import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Camera, FileText, CheckCircle2 } from 'lucide-react';

export function OrderStepsScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [photoTaken, setPhotoTaken] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Complete Delivery" />

      <div className="screen-padding py-6">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full ${
                s <= step ? 'bg-brand-secondary' : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Photo Capture */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="mb-2">Take Delivery Photo</h4>
              <p className="text-neutral-600">
                Take a photo of the delivered package at the customer's location
              </p>
            </div>

            <Card className="aspect-square flex flex-col items-center justify-center">
              {photoTaken ? (
                <div className="text-center">
                  <CheckCircle2 size={64} className="text-success mx-auto mb-4" />
                  <p className="text-success">Photo Captured</p>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 rounded-full gradient-action flex items-center justify-center mb-4">
                    <Camera size={32} className="text-white" />
                  </div>
                  <p className="text-neutral-600">Tap to capture photo</p>
                </>
              )}
            </Card>

            {!photoTaken && (
              <Button className="w-full" onClick={() => setPhotoTaken(true)}>
                <Camera size={20} />
                Take Photo
              </Button>
            )}
            {photoTaken && (
              <Button className="w-full" onClick={handleNext}>
                Continue
              </Button>
            )}
          </div>
        )}

        {/* Step 2: Invoice Summary */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="mb-2">Order Summary</h4>
              <p className="text-neutral-600">
                Review the order details before completing
              </p>
            </div>

            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-action flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <h6>Order #54321</h6>
                  <p className="text-sm text-neutral-600">Package Delivery</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Base Fare</span>
                  <span>AED 25.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Distance (8.5 km)</span>
                  <span>AED 8.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Time Bonus</span>
                  <span className="text-success">AED 1.50</span>
                </div>
                <div className="h-px bg-neutral-300 my-3" />
                <div className="flex justify-between">
                  <span>Total Earnings</span>
                  <span className="text-xl text-success">AED 35.00</span>
                </div>
              </div>
            </Card>

            <Button className="w-full" onClick={handleNext}>
              Confirm & Complete
            </Button>
          </div>
        )}

        {/* Step 3: Completion */}
        {step === 3 && (
          <div className="text-center space-y-6 py-12">
            <div className="w-24 h-24 rounded-full bg-success-light flex items-center justify-center mx-auto">
              <CheckCircle2 size={48} className="text-success" />
            </div>
            <div>
              <h3 className="mb-2">Order Completed!</h3>
              <p className="text-neutral-600">
                Great job! You've earned AED 35 for this delivery
              </p>
            </div>
            <div className="space-y-3">
              <Button className="w-full" onClick={handleNext}>
                Back to Dashboard
              </Button>
              <Button variant="ghost" className="w-full" onClick={() => navigate('/orders')}>
                View All Orders
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
