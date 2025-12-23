import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { Card } from '../components/Card';
import { StatusPill } from '../components/StatusPill';
import { Input } from '../components/Input';
import { Search, MapPin, Clock, DollarSign } from 'lucide-react';

export function MyOrdersScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Orders' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  const orders = [
    {
      id: 'RSA-54321',
      date: 'Today',
      status: 'completed',
      customer: 'Ahmed Mohamed',
      service: 'Battery Replacement',
      location: 'Al Olaya District',
      earnings: '150.00',
      time: '2:30 PM'
    },
    {
      id: 'RSA-54320',
      date: 'Today',
      status: 'completed',
      customer: 'Sarah Ali',
      service: 'Tire Change',
      location: 'King Fahd Road',
      earnings: '200.00',
      time: '11:15 AM'
    },
    {
      id: 'RSA-54319',
      date: 'Yesterday',
      status: 'completed',
      customer: 'Mohammed Khan',
      service: 'Jump Start',
      location: 'Business Bay',
      earnings: '80.00',
      time: '5:45 PM'
    },
    {
      id: 'RSA-54318',
      date: 'Yesterday',
      status: 'cancelled',
      customer: 'Fatima Hassan',
      service: 'Fuel Delivery',
      location: 'JBR',
      earnings: '0.00',
      time: '3:20 PM'
    }
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.includes(searchQuery) || 
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || order.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const groupedOrders = filteredOrders.reduce((groups, order) => {
    const date = order.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(order);
    return groups;
  }, {} as Record<string, typeof orders>);

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Header showBack title="My Orders" />

      <div className="screen-padding py-6">
        {/* Search */}
        <div className="mb-4">
          <Input
            type="search"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<Search size={20} />}
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 h-9 rounded-full whitespace-nowrap transition-colors ${
                selectedFilter === filter.id
                  ? 'gradient-action text-white'
                  : 'bg-white text-neutral-700 border border-neutral-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {Object.entries(groupedOrders).map(([date, dateOrders]) => (
          <div key={date} className="mb-6">
            <h6 className="mb-3 text-neutral-600">{date}</h6>
            <div className="space-y-3">
              {dateOrders.map((order) => (
                <Card key={order.id}>
                  <div className="flex items-center justify-between mb-4">
                    <StatusPill status={order.status === 'completed' ? 'success' : 'error'}>
                      {order.status === 'completed' ? 'Completed' : 'Cancelled'}
                    </StatusPill>
                    <span className="text-sm text-neutral-600">#{order.id}</span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="mb-1">{order.service}</p>
                      <p className="text-sm text-neutral-600">{order.customer}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-info mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-neutral-600">Location</p>
                        <p className="text-sm">{order.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-300">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Clock size={14} />
                      <span>{order.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-success">
                      <DollarSign size={16} />
                      <span>SAR {order.earnings}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomNav active="orders" />
    </div>
  );
}