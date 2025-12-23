import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, X } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showMenu?: boolean;
  showBack?: boolean;
  onMenuClick?: () => void;
}

export function Header({ title, showMenu = false, showBack = false, onMenuClick }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="gradient-hero min-h-[120px] rounded-b-[32px] px-5 pt-12 pb-6 flex items-end justify-between">
      <div className="flex items-center gap-3">
        {showMenu && (
          <button onClick={onMenuClick} className="text-white touch-target">
            <Menu size={24} />
          </button>
        )}
        {showBack && (
          <button onClick={() => navigate(-1)} className="text-white touch-target">
            <X size={24} />
          </button>
        )}
        {title && <h5 className="text-white">{title}</h5>}
      </div>
      <button className="text-white touch-target relative">
        <Bell size={24} />
        <span className="absolute top-0 right-0 w-2 h-2 bg-brand-accent rounded-full" />
      </button>
    </div>
  );
}
