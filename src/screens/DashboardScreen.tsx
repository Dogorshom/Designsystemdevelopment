import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { BottomNav } from '../components/BottomNav';
import { StatusPill } from '../components/StatusPill';
import { DollarSign, TrendingUp, Package, Clock, MapPin, User as UserIcon } from 'lucide-react';

export function DashboardScreen() {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Header showMenu onMenuClick={() => setShowDrawer(true)} />

      {/* Drawer */}
      {showDrawer && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowDrawer(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-[85%] bg-white z-50 animate-[slideInFromLeft_300ms] flex flex-col">
            {/* Drawer Header */}
            <div className="gradient-hero p-6 rounded-br-3xl safe-area-top">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1763065609930-8df4a66657a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBwcm9maWxlJTIwbWFufGVufDF8fHx8MTc2NjI1NTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h6 className="text-white truncate">Ahmed Hassan</h6>
                  <p className="text-neutral-300 text-sm truncate">ahmed.hassan@email.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-error/20 rounded-md">
                  <span className="text-error text-xs">Pending Account</span>
                </div>
                <button
                  onClick={() => { setShowDrawer(false); navigate('/edit-profile'); }}
                  className="ml-auto text-white/80 text-sm underline"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                <button
                  onClick={() => { setShowDrawer(false); navigate('/dashboard'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <Package size={22} className="text-neutral-600" />
                  <span>Dashboard</span>
                </button>
                
                <button
                  onClick={() => { setShowDrawer(false); navigate('/personal-documents'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <UserIcon size={22} className="text-neutral-600" />
                  <span>Personal Documents</span>
                </button>

                <button
                  onClick={() => { setShowDrawer(false); navigate('/manage-services'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <Package size={22} className="text-neutral-600" />
                  <span>Manage Services</span>
                </button>

                <div className="h-px bg-neutral-300 my-2" />

                <button
                  onClick={() => { setShowDrawer(false); navigate('/orders'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <Package size={22} className="text-neutral-600" />
                  <span>My Orders</span>
                </button>

                <button
                  onClick={() => { setShowDrawer(false); navigate('/earnings-detail'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <DollarSign size={22} className="text-neutral-600" />
                  <span>Earnings</span>
                </button>

                <button
                  onClick={() => { setShowDrawer(false); navigate('/wallet'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <DollarSign size={22} className="text-neutral-600" />
                  <span>Wallet</span>
                </button>

                <div className="h-px bg-neutral-300 my-2" />

                <button
                  onClick={() => { setShowDrawer(false); navigate('/change-language'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <UserIcon size={22} className="text-neutral-600" />
                  <span>Languages</span>
                </button>

                <button
                  onClick={() => { setShowDrawer(false); navigate('/about'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <UserIcon size={22} className="text-neutral-600" />
                  <span>About Us</span>
                </button>

                <button
                  onClick={() => { setShowDrawer(false); navigate('/contact'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <UserIcon size={22} className="text-neutral-600" />
                  <span>Contact Us</span>
                </button>

                <button
                  onClick={() => { setShowDrawer(false); navigate('/support-tickets'); }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-200 transition-colors touch-target"
                >
                  <UserIcon size={22} className="text-neutral-600" />
                  <span>Support Tickets</span>
                </button>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-neutral-300">
              <button
                onClick={() => navigate('/login')}
                className="w-full text-error p-3 rounded-xl hover:bg-error-light transition-colors touch-target"
              >
                Sign Out
              </button>
              <p className="text-center text-xs text-neutral-500 mt-3">Version 2.0.0</p>
            </div>
          </div>
        </>
      )}

      <div className="screen-padding mt-[-40px] relative z-10">
        {/* Online Toggle Card */}
        <Card className="mb-6 glass-effect">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-white mb-1">You're {isOnline ? 'Online' : 'Offline'}</h5>
              <p className="text-neutral-300 text-sm">
                {isOnline ? 'Ready to accept orders' : 'You won\'t receive orders'}
              </p>
            </div>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isOnline ? 'bg-brand-tertiary' : 'bg-neutral-400'
              }`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                  isOnline ? 'translate-x-7' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-success-light flex items-center justify-center">
                <DollarSign size={20} className="text-success" />
              </div>
              <div>
                <p className="text-neutral-600 text-sm mb-1">Today's Earnings</p>
                <h5>SAR 480</h5>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-info-light flex items-center justify-center">
                <TrendingUp size={20} className="text-info" />
              </div>
              <div>
                <p className="text-neutral-600 text-sm mb-1">Services Done</p>
                <h5>6 Jobs</h5>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <h5 className="mb-4">Quick Actions</h5>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card onClick={() => navigate('/new-order-notification')} className="text-center">
            <div className="w-12 h-12 rounded-xl gradient-action flex items-center justify-center mx-auto mb-3">
              <Package size={24} className="text-white" />
            </div>
            <p>New Requests</p>
          </Card>
          <Card onClick={() => navigate('/chat')} className="text-center">
            <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center mx-auto mb-3">
              <MapPin size={24} className="text-neutral-700" />
            </div>
            <p>Navigate</p>
          </Card>
        </div>

        {/* Active Service */}
        <h5 className="mb-4">Active Service</h5>
        <Card onClick={() => navigate('/active-order-ontheway')} className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <StatusPill status="info">On The Way</StatusPill>
            <span className="text-sm text-neutral-600">#RSA-12345</span>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">🔋</div>
            <div className="flex-1">
              <p className="mb-1">Battery Replacement</p>
              <p className="text-sm text-neutral-600">Ahmed Mohamed</p>
              <div className="flex items-center gap-2 text-sm text-neutral-600 mt-1">
                <MapPin size={14} />
                <span>Al Olaya District - 3.2 km away</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-neutral-300">
            <div className="flex items-center gap-2 text-neutral-600">
              <Clock size={16} />
              <span className="text-sm">Accepted 5 mins ago</span>
            </div>
            <span className="text-brand-secondary">View Details →</span>
          </div>
        </Card>
      </div>

      <BottomNav active="home" />
    </div>
  );
}