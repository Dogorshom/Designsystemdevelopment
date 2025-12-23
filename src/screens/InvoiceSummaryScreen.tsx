import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { FileText, DollarSign, CreditCard, Banknote, Wallet, Clock } from 'lucide-react';

export function InvoiceSummaryScreen() {
  const navigate = useNavigate();
  const [paymentCollected, setPaymentCollected] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'wallet'>('cash');

  const lineItems = [
    { label: 'Battery Replacement', amount: 120.00 },
    { label: 'Service Fee', amount: 30.00 }
  ];

  const total = lineItems.reduce((sum, item) => sum + item.amount, 0);

  const canProceed = paymentCollected;

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Invoice Summary" />

      <div className="screen-padding py-6">
        {/* Order Info Card */}
        <Card className="mb-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-action flex items-center justify-center">
              <FileText size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h6 className="mb-1">Order #RSA-12345</h6>
              <p className="text-sm text-neutral-600">Battery Replacement</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-300">
            <div>
              <p className="text-xs text-neutral-600 mb-1">Date & Time</p>
              <p className="text-sm">Dec 20, 2024 • 10:45 AM</p>
            </div>
            <div>
              <p className="text-xs text-neutral-600 mb-1">Duration</p>
              <div className="flex items-center gap-1">
                <Clock size={14} className="text-neutral-600" />
                <p className="text-sm">25 minutes</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Line Items */}
        <Card className="mb-6">
          <h6 className="mb-4">Service Breakdown</h6>
          <div className="space-y-3">
            {lineItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-neutral-700">{item.label}</span>
                <span className="font-semibold">SAR {item.amount.toFixed(2)}</span>
              </div>
            ))}
            <div className="h-px bg-neutral-300 my-3" />
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg">Total Amount</span>
              <div className="flex items-center gap-1">
                <DollarSign size={20} className="text-success" />
                <span className="text-2xl font-bold text-success">SAR {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Payment Method Selection */}
        <Card className="mb-6">
          <h6 className="mb-4">Payment Method</h6>
          <div className="space-y-2">
            <label
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                paymentMethod === 'cash'
                  ? 'border-brand-secondary bg-brand-secondary/5'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value as 'cash')}
                className="w-5 h-5 accent-brand-secondary"
              />
              <Banknote size={24} className="text-neutral-600" />
              <span className="flex-1">Cash</span>
            </label>

            <label
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                paymentMethod === 'card'
                  ? 'border-brand-secondary bg-brand-secondary/5'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                className="w-5 h-5 accent-brand-secondary"
              />
              <CreditCard size={24} className="text-neutral-600" />
              <span className="flex-1">Card</span>
            </label>

            <label
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                paymentMethod === 'wallet'
                  ? 'border-brand-secondary bg-brand-secondary/5'
                  : 'border-neutral-300 hover:border-neutral-400'
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="wallet"
                checked={paymentMethod === 'wallet'}
                onChange={(e) => setPaymentMethod(e.target.value as 'wallet')}
                className="w-5 h-5 accent-brand-secondary"
              />
              <Wallet size={24} className="text-neutral-600" />
              <span className="flex-1">Digital Wallet</span>
            </label>
          </div>
        </Card>

        {/* Payment Confirmation */}
        <Card className="mb-6">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={paymentCollected}
              onChange={(e) => setPaymentCollected(e.target.checked)}
              className="w-5 h-5 mt-0.5 accent-brand-secondary"
            />
            <div>
              <p className="font-semibold mb-1">Confirm Payment Collection</p>
              <p className="text-sm text-neutral-600">
                {paymentMethod === 'cash' && 'I confirm that the customer has paid SAR 150.00 in cash'}
                {paymentMethod === 'card' && 'Payment successfully processed via card terminal'}
                {paymentMethod === 'wallet' && 'Payment collected through digital wallet'}
              </p>
            </div>
          </label>
        </Card>

        {/* Complete Button */}
        <Button
          className="w-full"
          onClick={() => navigate('/order-completed')}
          disabled={!canProceed}
        >
          COMPLETE & CLOSE ORDER
        </Button>

        {!canProceed && (
          <p className="text-center text-sm text-neutral-600 mt-3">
            Please confirm payment collection to proceed
          </p>
        )}
      </div>
    </div>
  );
}
