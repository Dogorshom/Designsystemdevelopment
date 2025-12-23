import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Clock, CheckCircle2, DollarSign } from 'lucide-react';

export function EarningsDetailScreen() {
  const navigate = useNavigate();

  const summary = [
    { label: 'Services Fee', value: '800 SAR' },
    { label: 'Sayaratech Fee', value: '300 SAR' },
    { label: 'Tax', value: '80 SAR' },
    { label: 'Discount', value: '80 SAR' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Earnings" />

      <div className="screen-padding py-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="text-center">
            <div className="w-10 h-10 rounded-xl bg-info-light flex items-center justify-center mx-auto mb-2">
              <Clock size={20} className="text-info" />
            </div>
            <p className="text-xl mb-1">40.75</p>
            <p className="text-xs text-neutral-600">Online Hours</p>
          </Card>
          <Card className="text-center">
            <div className="w-10 h-10 rounded-xl bg-success-light flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 size={20} className="text-success" />
            </div>
            <p className="text-xl mb-1">21</p>
            <p className="text-xs text-neutral-600">Trips</p>
          </Card>
          <Card className="text-center">
            <div className="w-10 h-10 rounded-xl bg-warning-light flex items-center justify-center mx-auto mb-2">
              <DollarSign size={20} className="text-warning" />
            </div>
            <p className="text-xl mb-1">1,200</p>
            <p className="text-xs text-neutral-600">SAR</p>
          </Card>
        </div>

        {/* Summary Card */}
        <Card className="mb-6">
          <h6 className="mb-4">Summary</h6>
          <div className="space-y-3">
            {summary.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-neutral-700">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
            <div className="h-px bg-neutral-300 my-2" />
            <div className="flex justify-between items-center">
              <span>Total Earnings</span>
              <span className="text-xl text-success">1,200 SAR</span>
            </div>
          </div>
        </Card>

        {/* Action Button */}
        <Button className="w-full" onClick={() => navigate('/support-tickets')}>
          Create a Ticket
        </Button>
      </div>
    </div>
  );
}
