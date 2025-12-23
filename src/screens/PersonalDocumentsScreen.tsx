import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Camera, Upload, CheckCircle2 } from 'lucide-react';

export function PersonalDocumentsScreen() {
  const navigate = useNavigate();
  const [docType, setDocType] = useState<'national_id' | 'iqama'>('national_id');
  const [uploads, setUploads] = useState({
    profile: false,
    id: false,
    license: false
  });

  const handleUpload = (type: 'profile' | 'id' | 'license') => {
    // Simulate upload
    setUploads({ ...uploads, [type]: true });
  };

  const handleSave = () => {
    if (uploads.profile && uploads.id && uploads.license) {
      navigate('/signup-success');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Personal Documents" />

      <div className="screen-padding py-6">
        {/* Document Type Toggle */}
        <Card className="mb-6">
          <h6 className="mb-4">Document Type</h6>
          <div className="flex gap-2">
            <button
              onClick={() => setDocType('national_id')}
              className={`flex-1 h-12 rounded-xl transition-colors ${
                docType === 'national_id'
                  ? 'gradient-action text-white'
                  : 'bg-neutral-200 text-neutral-700'
              }`}
            >
              National ID
            </button>
            <button
              onClick={() => setDocType('iqama')}
              className={`flex-1 h-12 rounded-xl transition-colors ${
                docType === 'iqama'
                  ? 'gradient-action text-white'
                  : 'bg-neutral-200 text-neutral-700'
              }`}
            >
              Iqama
            </button>
          </div>
          <p className="text-sm text-neutral-600 mt-3">
            {docType === 'national_id'
              ? 'Upload your National ID for verification'
              : 'Upload your Iqama (residence permit) for verification'}
          </p>
        </Card>

        {/* Profile Photo */}
        <Card className="mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden">
                {uploads.profile ? (
                  <img
                    src="https://images.unsplash.com/photo-1763065609930-8df4a66657a2?w=150&h=150&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera size={32} className="text-neutral-500" />
                )}
              </div>
              {uploads.profile && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h6 className="mb-1">Profile Photo</h6>
              <p className="text-sm text-neutral-600 mb-3">
                Upload a clear photo of your face
              </p>
              <button
                onClick={() => handleUpload('profile')}
                className="flex items-center gap-2 text-brand-secondary text-sm"
              >
                <Camera size={16} />
                {uploads.profile ? 'Change Photo' : 'Take Photo'}
              </button>
            </div>
          </div>
        </Card>

        {/* ID/Iqama Image */}
        <Card className="mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-xl bg-neutral-200 flex items-center justify-center overflow-hidden">
                {uploads.id ? (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                ) : (
                  <Upload size={32} className="text-neutral-500" />
                )}
              </div>
              {uploads.id && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h6 className="mb-1">{docType === 'national_id' ? 'National ID' : 'Iqama'}</h6>
              <p className="text-sm text-neutral-600 mb-3">
                Upload a clear image of your {docType === 'national_id' ? 'ID' : 'Iqama'}
              </p>
              <button
                onClick={() => handleUpload('id')}
                className="flex items-center gap-2 text-brand-secondary text-sm"
              >
                <Upload size={16} />
                {uploads.id ? 'Change Image' : 'Upload Image'}
              </button>
            </div>
          </div>
        </Card>

        {/* Driver License */}
        <Card className="mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-xl bg-neutral-200 flex items-center justify-center overflow-hidden">
                {uploads.license ? (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                ) : (
                  <Upload size={32} className="text-neutral-500" />
                )}
              </div>
              {uploads.license && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h6 className="mb-1">Driver License</h6>
              <p className="text-sm text-neutral-600 mb-3">
                Upload a clear image of your driver's license
              </p>
              <button
                onClick={() => handleUpload('license')}
                className="flex items-center gap-2 text-brand-secondary text-sm"
              >
                <Upload size={16} />
                {uploads.license ? 'Change Image' : 'Upload Image'}
              </button>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <Button
          className="w-full"
          onClick={handleSave}
          disabled={!uploads.profile || !uploads.id || !uploads.license}
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
}
