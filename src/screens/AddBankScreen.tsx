import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Building, User, CreditCard, ChevronDown } from 'lucide-react';

export function AddBankScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bank: '',
    holderName: '',
    iban: ''
  });

  const banks = [
    'Al Rajhi Bank',
    'Saudi National Bank',
    'Riyad Bank',
    'Saudi British Bank',
    'Alinma Bank',
    'Bank AlJazira',
    'Arab National Bank'
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/all-banks');
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Add Bank Account" />

      <form onSubmit={handleSave} className="screen-padding py-6">
        <p className="text-neutral-600 mb-6">
          Add your bank account details to receive payments
        </p>

        <div className="space-y-4 mb-6">
          {/* Bank Selection */}
          <div>
            <label className="block mb-2 text-neutral-700">Select Bank</label>
            <div className="relative">
              <select
                value={formData.bank}
                onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                className="w-full h-14 px-4 pl-12 bg-neutral-200 rounded-xl border-2 border-transparent outline-none appearance-none"
                required
              >
                <option value="">Choose a bank</option>
                {banks.map((bank) => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
              <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              <Building size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            </div>
          </div>

          {/* Account Holder Name */}
          <Input
            label="Account Holder Name"
            placeholder="Enter full name as per bank"
            value={formData.holderName}
            onChange={(e) => setFormData({ ...formData, holderName: e.target.value })}
            icon={<User size={20} />}
            required
          />

          {/* IBAN */}
          <Input
            label="IBAN Number"
            placeholder="SA0000000000000000000000"
            value={formData.iban}
            onChange={(e) => setFormData({ ...formData, iban: e.target.value.toUpperCase() })}
            icon={<CreditCard size={20} />}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Save Bank Account
        </Button>
      </form>
    </div>
  );
}
