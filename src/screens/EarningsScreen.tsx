import React from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { Card } from '../components/Card';
import { DollarSign, TrendingUp, TrendingDown, Calendar } from 'lucide-react';

export function EarningsScreen() {
  const weeklyData = [
    { day: 'Mon', amount: 180 },
    { day: 'Tue', amount: 245 },
    { day: 'Wed', amount: 210 },
    { day: 'Thu', amount: 280 },
    { day: 'Fri', amount: 320 },
    { day: 'Sat', amount: 380 },
    { day: 'Sun', amount: 290 }
  ];

  const maxAmount = Math.max(...weeklyData.map(d => d.amount));

  const transactions = [
    { id: 1, type: 'Order #54321', amount: '35.00', date: 'Today, 2:30 PM', status: 'credit' },
    { id: 2, type: 'Order #54320', amount: '42.00', date: 'Today, 11:15 AM', status: 'credit' },
    { id: 3, type: 'Weekly Payout', amount: '1,245.00', date: 'Yesterday', status: 'debit' },
    { id: 4, type: 'Order #54319', amount: '28.50', date: 'Yesterday, 5:45 PM', status: 'credit' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Header showBack title="Earnings" />

      <div className="screen-padding py-6">
        {/* Balance Hero */}
        <Card className="gradient-hero mb-6">
          <div className="text-center py-6">
            <p className="text-neutral-300 mb-2">Current Balance</p>
            <h1 className="text-white mb-1">SAR 1,890</h1>
            <div className="flex items-center justify-center gap-2 text-brand-tertiary">
              <TrendingUp size={16} />
              <span className="text-sm">+12% from last week</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <p className="text-neutral-300 text-sm mb-1">This Week</p>
              <p className="text-white text-xl">SAR 1,905</p>
            </div>
            <div className="text-center">
              <p className="text-neutral-300 text-sm mb-1">This Month</p>
              <p className="text-white text-xl">SAR 7,540</p>
            </div>
          </div>
        </Card>

        {/* Weekly Chart */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h5>Weekly Earnings</h5>
            <button className="text-brand-secondary text-sm">View All</button>
          </div>
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyData.map((data, index) => {
              const height = (data.amount / maxAmount) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-neutral-600">SAR {data.amount}</span>
                  <div className="w-full bg-neutral-200 rounded-t-lg relative" style={{ height: '100%' }}>
                    <div
                      className="absolute bottom-0 w-full gradient-action rounded-t-lg transition-all"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-sm text-neutral-600">{data.day}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="text-center">
            <div className="w-10 h-10 rounded-xl bg-success-light flex items-center justify-center mx-auto mb-2">
              <DollarSign size={20} className="text-success" />
            </div>
            <p className="text-2xl mb-1">48</p>
            <p className="text-xs text-neutral-600">Orders</p>
          </Card>
          <Card className="text-center">
            <div className="w-10 h-10 rounded-xl bg-info-light flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={20} className="text-info" />
            </div>
            <p className="text-2xl mb-1">SAR 39</p>
            <p className="text-xs text-neutral-600">Avg/Order</p>
          </Card>
          <Card className="text-center">
            <div className="w-10 h-10 rounded-xl bg-warning-light flex items-center justify-center mx-auto mb-2">
              <Calendar size={20} className="text-warning" />
            </div>
            <p className="text-2xl mb-1">5.2</p>
            <p className="text-xs text-neutral-600">Hrs/Day</p>
          </Card>
        </div>

        {/* Recent Transactions */}
        <h5 className="mb-4">Recent Transactions</h5>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <Card key={transaction.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    transaction.status === 'credit' ? 'bg-success-light' : 'bg-info-light'
                  }`}>
                    {transaction.status === 'credit' ? (
                      <TrendingUp size={20} className="text-success" />
                    ) : (
                      <TrendingDown size={20} className="text-info" />
                    )}
                  </div>
                  <div>
                    <p>{transaction.type}</p>
                    <p className="text-sm text-neutral-600">{transaction.date}</p>
                  </div>
                </div>
                <p className={`${
                  transaction.status === 'credit' ? 'text-success' : 'text-info'
                }`}>
                  {transaction.status === 'credit' ? '+' : '-'}SAR {transaction.amount}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav active="earnings" />
    </div>
  );
}
