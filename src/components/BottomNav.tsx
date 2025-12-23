import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, FileText, DollarSign, HelpCircle } from 'lucide-react';

interface BottomNavProps {
  active: string;
}

export function BottomNav({ active }: BottomNavProps) {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'orders', label: 'Orders', icon: FileText, path: '/orders' },
    { id: 'earnings', label: 'Earnings', icon: DollarSign, path: '/earnings' },
    { id: 'support', label: 'Support', icon: HelpCircle, path: '/support' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-300 safe-area-bottom z-30">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 touch-target transition-colors ${
                isActive ? 'text-brand-secondary' : 'text-neutral-600'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
