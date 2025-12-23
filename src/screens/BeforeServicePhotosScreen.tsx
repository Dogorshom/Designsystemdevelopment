import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Camera, CheckCircle2 } from 'lucide-react';

export function BeforeServicePhotosScreen() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = () => {
    // Simulate photo capture
    const mockPhoto = `https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop&q=80&photo=${photos.length}`;
    setPhotos([...photos, mockPhoto]);
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const canProceed = photos.length >= 2;

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Before Service Photos" />

      <div className="screen-padding py-6">
        {/* Instructions */}
        <div className="bg-info-light border-l-4 border-info rounded-lg p-4 mb-6">
          <h6 className="text-info mb-2">📸 Photo Requirements</h6>
          <p className="text-sm text-neutral-700">
            Take clear photos of the vehicle before starting the service. Minimum 2 photos required.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Captured Photos */}
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-200">
              <img
                src={photo}
                alt={`Before photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-success flex items-center justify-center">
                <CheckCircle2 size={18} className="text-white" />
              </div>
              <button
                onClick={() => handleRemovePhoto(index)}
                className="absolute bottom-2 right-2 px-3 py-1 bg-error text-white text-sm rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Add Photo Slots */}
          {photos.length < 4 && (
            <button
              onClick={handleAddPhoto}
              className="aspect-square rounded-2xl border-2 border-dashed border-neutral-400 bg-neutral-200/50 flex flex-col items-center justify-center gap-2 hover:border-brand-secondary hover:bg-brand-secondary/5 transition-colors"
            >
              <Camera size={32} className="text-neutral-500" />
              <span className="text-sm text-neutral-600">Add Photo</span>
            </button>
          )}
        </div>

        {/* Photo Counter */}
        <div className="text-center mb-6">
          <p className={`text-sm ${canProceed ? 'text-success' : 'text-neutral-600'}`}>
            {photos.length} of minimum 2 photos captured
            {canProceed && ' ✓'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            className="w-full"
            onClick={() => navigate('/service-in-progress')}
            disabled={!canProceed}
          >
            START SERVICE
          </Button>
          <p className="text-center text-xs text-neutral-500">
            You can add up to 4 photos
          </p>
        </div>
      </div>
    </div>
  );
}
