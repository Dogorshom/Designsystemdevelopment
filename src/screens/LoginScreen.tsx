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
    <div className="min-h-screen bg-neutral-100">
      <div className="gradient-hero rounded-b-[32px] px-5 pt-12 pb-32">
        <div className="flex items-center gap-3 mb-4">
          <Package size={48} className="text-brand-tertiary" strokeWidth={2} />
          <h2 className="text-white">Fazaa</h2>
        </div>
        <h4 className="text-white mt-8">Welcome Back</h4>
        <p className="text-neutral-300 mt-1">Sign in to your account</p>
        <p> d</p>
        <div></div>
      </div>

      <form onSubmit={handleLogin} className="screen-padding -mt-16 space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <label className="block mb-2 text-neutral-700">Phone Number</label>
            <div className="flex items-center gap-2">
              <div className="h-14 px-4 bg-neutral-200 rounded-xl flex items-center text-neutral-600">
                +966
              </div>
              <Input
                type="tel"
                placeholder="5xxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                icon={<Phone size={20} />}
                className="flex-1"
              />
            </div>
          </div>

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20} />}
          />
          
          <button
            type="button"
            className="text-brand-secondary text-sm"
          >
            Forgot Password?
          </button>

          <Button type="submit" className="w-full mt-6">
            SIGN IN
          </Button>
          
          <div className="text-center pt-4">
            <span className="text-neutral-600">Don't have an account? </span>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-brand-secondary"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="text-center pt-6 text-neutral-500 text-sm">
          By signing in, you agree to our{' '}
          <button type="button" className="text-brand-secondary underline">
            Terms & Privacy Policy
          </button>
        </div>
      </form>
    </div>
  );
}
