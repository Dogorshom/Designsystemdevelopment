import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function ManageServicesScreen() {
  const navigate = useNavigate();
  const [services, setServices] = useState([
    { id: 1, name: 'Battery Replacement', group: 'Roadside Assistance', enabled: true },
    { id: 2, name: 'Tire Change', group: 'Roadside Assistance', enabled: true },
    { id: 3, name: 'Jump Start', group: 'Roadside Assistance', enabled: true },
    { id: 4, name: 'Fuel Delivery', group: 'Roadside Assistance', enabled: false },
    { id: 5, name: 'Lockout Service', group: 'Emergency Services', enabled: false },
    { id: 6, name: 'Towing Service', group: 'Recovery Services', enabled: true },
    { id: 7, name: 'Flat Tire Repair', group: 'Roadside Assistance', enabled: true },
    { id: 8, name: 'Winch Out Service', group: 'Recovery Services', enabled: false }
  ]);

  const toggleService = (id: number) => {
    setServices(services.map(s =>
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const handleSave = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Manage Services" />

      <div className="screen-padding py-6">
        <p className="text-neutral-600 mb-6">
          Select the services you want to offer. You can change these anytime.
        </p>

        <div className="space-y-3 mb-6">
          {services.map((service) => (
            <Card key={service.id}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p>{service.name}</p>
                  <p className="text-sm text-neutral-600">{service.group}</p>
                </div>
                <button
                  onClick={() => toggleService(service.id)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    service.enabled ? 'bg-brand-tertiary' : 'bg-neutral-400'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                      service.enabled ? 'translate-x-7' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </Card>
          ))}
        </div>

        <Button className="w-full" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}