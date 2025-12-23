import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Truck, DollarSign, Shield } from 'lucide-react';

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Truck,
      title: 'Provide Roadside Services',
      description: 'Help stranded drivers with battery replacement, tire changes, and more'
    },
    {
      icon: DollarSign,
      title: 'Earn More Money',
      description: 'Track your earnings in real-time and get paid weekly for every service'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with 24/7 support and insurance coverage'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-screen bg-neutral-100 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center screen-padding">
        <div className="w-32 h-32 rounded-full gradient-action flex items-center justify-center mb-8">
          <Icon size={64} className="text-white" />
        </div>
        <h3 className="text-center mb-4">{slide.title}</h3>
        <p className="text-center text-neutral-600 max-w-sm">{slide.description}</p>
      </div>

      <div className="screen-padding pb-12">
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-brand-secondary' : 'w-2 bg-neutral-400'
              }`}
            />
          ))}
        </div>
        <Button onClick={handleNext} className="w-full">
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </Button>
        {currentSlide < slides.length - 1 && (
          <button
            onClick={() => navigate('/login')}
            className="w-full mt-4 text-neutral-600 touch-target"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}