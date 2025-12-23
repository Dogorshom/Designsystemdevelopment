import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { User, Phone, Lock, Mail, ArrowLeft, Calendar, CreditCard, Eye, EyeOff, ChevronDown } from 'lucide-react';

export function SignUpScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const [formData, setFormData] = useState({
    phone: '',
    username: '',
    email: '',
    nationality: '',
    password: '',
    confirmPassword: '',
    idNumber: '',
    licNumber: '',
    licExpiryDate: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const countries = [
    'Saudi Arabia',
    'United Arab Emirates',
    'Kuwait',
    'Qatar',
    'Bahrain',
    'Oman',
    'Egypt',
    'Jordan',
    'Lebanon'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Phone validation (9 digits starting with 5)
    if (!formData.phone.match(/^5\d{8}$/)) {
      newErrors.phone = 'Phone must be 9 digits starting with 5';
    }

    // Username validation
    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email address';
    }

    // Nationality validation
    if (!formData.nationality) {
      newErrors.nationality = 'Please select nationality';
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // ID Number validation (10 digits)
    if (!formData.idNumber.match(/^\d{10}$/)) {
      newErrors.idNumber = 'ID must be exactly 10 digits';
    }

    // License number validation
    if (!formData.licNumber) {
      newErrors.licNumber = 'License number is required';
    }

    // License expiry date validation
    if (!formData.licExpiryDate) {
      newErrors.licExpiryDate = 'License expiry date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && acceptedTerms) {
      navigate('/personal-documents');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="gradient-hero rounded-b-[32px] px-5 pt-12 pb-8">
        <button onClick={() => navigate('/login')} className="text-white mb-4 touch-target">
          <ArrowLeft size={24} />
        </button>
        <h4 className="text-white">Sign Up</h4>
        <p className="text-neutral-300 mt-1">Create your provider account</p>
      </div>

      <form onSubmit={handleSubmit} className="screen-padding py-6 space-y-4">
        {/* Phone Input */}
        <div>
          <label className="block mb-2 text-neutral-700">Phone Number</label>
          <div className="flex items-center gap-2">
            <div className="h-14 px-4 bg-neutral-200 rounded-xl flex items-center text-neutral-600">
              +966
            </div>
            <Input
              type="tel"
              placeholder="5xxxxxxxx"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 9) })}
              error={errors.phone}
              icon={<Phone size={20} />}
              className="flex-1"
            />
          </div>
        </div>

        {/* Username */}
        <Input
          label="Username"
          placeholder="Enter username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          error={errors.username}
          icon={<User size={20} />}
        />

        {/* Email */}
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          icon={<Mail size={20} />}
        />

        {/* Nationality Dropdown */}
        <div>
          <label className="block mb-2 text-neutral-700">Country / Nationality</label>
          <div className="relative">
            <select
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
              className={`w-full h-14 px-4 pl-12 bg-neutral-200 rounded-xl border-2 ${
                errors.nationality ? 'border-error' : 'border-transparent'
              } outline-none appearance-none`}
            >
              <option value="">Select nationality</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
          </div>
          {errors.nationality && <p className="mt-2 text-error text-sm">{errors.nationality}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-neutral-700">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              icon={<Lock size={20} />}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-neutral-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2 text-neutral-700">Confirm Password</label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={errors.confirmPassword}
              icon={<Lock size={20} />}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-3.5 text-neutral-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* ID Number */}
        <Input
          label="ID Number"
          type="tel"
          placeholder="10-digit ID number"
          value={formData.idNumber}
          onChange={(e) => setFormData({ ...formData, idNumber: e.target.value.replace(/\D/g, '').slice(0, 10) })}
          error={errors.idNumber}
          icon={<CreditCard size={20} />}
        />

        {/* License Number */}
        <Input
          label="Driver License Number"
          placeholder="Enter license number"
          value={formData.licNumber}
          onChange={(e) => setFormData({ ...formData, licNumber: e.target.value })}
          error={errors.licNumber}
          icon={<CreditCard size={20} />}
        />

        {/* License Expiry Date */}
        <Input
          label="License Expiry Date"
          type="date"
          value={formData.licExpiryDate}
          onChange={(e) => setFormData({ ...formData, licExpiryDate: e.target.value })}
          error={errors.licExpiryDate}
          icon={<Calendar size={20} />}
          min={new Date().toISOString().split('T')[0]}
        />

        {/* Terms & Conditions */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="w-5 h-5 mt-0.5 accent-brand-secondary"
          />
          <label htmlFor="terms" className="text-sm text-neutral-700">
            I agree to the{' '}
            <button type="button" className="text-brand-secondary underline">
              Terms & Conditions
            </button>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full mt-6"
          disabled={!acceptedTerms}
        >
          SIGN UP
        </Button>

        {/* Login Link */}
        <div className="text-center pt-4">
          <span className="text-neutral-600">Already have an account? </span>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-brand-secondary"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
