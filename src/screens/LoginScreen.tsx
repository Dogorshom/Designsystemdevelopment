import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Package, Phone, Lock } from 'lucide-react';

export function LoginScreen() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center screen-padding">
        <div className="flex items-center gap-3 mb-12">
          <Package size={48} className="text-brand-tertiary" strokeWidth={2} />
          <h2 className="text-white">Fazaa</h2>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <Input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            icon={<Phone size={20} />}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20} />}
          />
          
          <button
            type="button"
            className="text-brand-tertiary text-sm"
          >
            Forgot Password?
          </button>

          <Button type="submit" className="w-full mt-6">
            Sign In
          </Button>
          
          <div className="text-center mt-6">
            <span className="text-neutral-400">Don't have an account? </span>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-brand-tertiary"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="screen-padding pb-12 text-center text-neutral-400 text-sm">
        By signing in, you agree to our Terms & Privacy Policy
      </div>
    </div>
  );
}
