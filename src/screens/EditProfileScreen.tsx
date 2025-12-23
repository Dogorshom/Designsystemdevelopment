import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { User, Phone, Mail, CreditCard, Calendar, Camera } from 'lucide-react';

export function EditProfileScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '966501234567',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@email.com',
    idNumber: '1234567890',
    licNumber: 'LIC123456',
    licExpiryDate: '2025-12-31'
  });

  const handleSave = () => {
    // Save logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Edit Profile" />

      <div className="screen-padding py-6">
        {/* Profile Photo Section */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <img
              src="https://images.unsplash.com/photo-1763065609930-8df4a66657a2?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full gradient-action flex items-center justify-center shadow-lg">
              <Camera size={20} className="text-white" />
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-3">Tap to change profile photo</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            icon={<Phone size={20} />}
          />

          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            icon={<User size={20} />}
          />

          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            icon={<Mail size={20} />}
          />

          <Input
            label="ID Number"
            value={formData.idNumber}
            onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
            icon={<CreditCard size={20} />}
          />

          <Input
            label="License Number"
            value={formData.licNumber}
            onChange={(e) => setFormData({ ...formData, licNumber: e.target.value })}
            icon={<CreditCard size={20} />}
          />

          <Input
            label="License Expiry Date"
            type="date"
            value={formData.licExpiryDate}
            onChange={(e) => setFormData({ ...formData, licExpiryDate: e.target.value })}
            icon={<Calendar size={20} />}
          />
        </div>

        {/* Document Images Section */}
        <h6 className="mb-4">Document Images</h6>
        <div className="space-y-3 mb-6">
          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center">
                  <Camera size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p>Profile Image</p>
                  <p className="text-sm text-neutral-600">Last updated today</p>
                </div>
              </div>
              <button className="text-brand-secondary text-sm">Edit</button>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center">
                  <Camera size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p>ID Image</p>
                  <p className="text-sm text-neutral-600">Last updated 2 days ago</p>
                </div>
              </div>
              <button className="text-brand-secondary text-sm">Edit</button>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-neutral-200 flex items-center justify-center">
                  <Camera size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p>Driver License Image</p>
                  <p className="text-sm text-neutral-600">Last updated 1 week ago</p>
                </div>
              </div>
              <button className="text-brand-secondary text-sm">Edit</button>
            </div>
          </Card>
        </div>

        {/* Save Button */}
        <Button className="w-full" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
