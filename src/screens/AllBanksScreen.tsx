import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export function AllBanksScreen() {
  const navigate = useNavigate();

  const banks = [
    { id: 1, name: 'Al Rajhi Bank', holder: 'Ahmed Hassan', iban: 'SA** **** **** **** **1234' },
    { id: 2, name: 'Saudi National Bank', holder: 'Ahmed Hassan', iban: 'SA** **** **** **** **5678' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="All Banks" />

      <div className="screen-padding py-6 pb-24">
        {banks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-600 mb-4">No bank accounts found</p>
            <p className="text-sm text-neutral-500">Add a bank account to receive payments</p>
          </div>
        ) : (
          <div className="space-y-3">
            {banks.map((bank) => (
              <Card key={bank.id}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h6 className="mb-1">{bank.name}</h6>
                    <p className="text-sm text-neutral-600 mb-1">{bank.holder}</p>
                    <p className="text-sm text-neutral-500">{bank.iban}</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-3 border-t border-neutral-300">
                  <button
                    onClick={() => navigate('/edit-bank')}
                    className="flex-1 flex items-center justify-center gap-2 h-10 bg-neutral-200 rounded-lg hover:bg-neutral-300 transition-colors"
                  >
                    <Edit2 size={16} />
                    <span className="text-sm">Edit</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 h-10 bg-error-light rounded-lg hover:bg-error/20 transition-colors text-error">
                    <Trash2 size={16} />
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => navigate('/add-bank')}
        className="fixed bottom-8 right-5 w-14 h-14 rounded-full gradient-action shadow-2xl flex items-center justify-center z-20"
      >
        <Plus size={28} className="text-white" />
      </button>
    </div>
  );
}
