import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Plus, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';

export function WalletScreen() {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, description: 'Order #54321', amount: '+35.00', date: 'Today, 2:30 PM', type: 'credit' },
    { id: 2, description: 'Withdrawal to Bank', amount: '-500.00', date: 'Yesterday', type: 'debit' },
    { id: 3, description: 'Order #54320', amount: '+42.00', date: 'Dec 19, 11:15 AM', type: 'credit' },
    { id: 4, description: 'Order #54319', amount: '+28.50', date: 'Dec 18, 5:45 PM', type: 'credit' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Wallet" />

      <div className="screen-padding py-6">
        {/* Balance Card */}
        <Card className="gradient-hero mb-6">
          <p className="text-neutral-300 mb-2">Available Balance</p>
          <h1 className="text-white mb-6">107.00 SAR</h1>
          
          {/* Quick Actions */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors">
              <Plus size={20} />
              <span>Add Money</span>
            </button>
            <button
              onClick={() => navigate('/all-banks')}
              className="flex-1 flex items-center justify-center gap-2 h-12 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <ArrowUpRight size={20} />
              <span>Withdraw</span>
            </button>
          </div>
        </Card>

        {/* Transactions */}
        <div className="flex items-center justify-between mb-4">
          <h6>Recent Transactions</h6>
          <button className="text-brand-secondary text-sm">View All</button>
        </div>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <Card key={transaction.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    transaction.type === 'credit' ? 'bg-success-light' : 'bg-error-light'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <TrendingUp size={20} className="text-success" />
                    ) : (
                      <TrendingDown size={20} className="text-error" />
                    )}
                  </div>
                  <div>
                    <p>{transaction.description}</p>
                    <p className="text-sm text-neutral-600">{transaction.date}</p>
                  </div>
                </div>
                <p className={`${
                  transaction.type === 'credit' ? 'text-success' : 'text-error'
                }`}>
                  {transaction.amount} SAR
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
