import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Star, Sparkles } from 'lucide-react';

export function OrderCompletedScreen() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const tags = ['Friendly', 'Clear location', 'On time', 'Easy communication', 'Respectful'];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="h-screen gradient-hero flex flex-col items-center justify-center screen-padding relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <>
          <Sparkles className="absolute top-20 left-10 text-brand-tertiary animate-[pulse_1s_ease-in-out_infinite]" size={32} />
          <Sparkles className="absolute top-32 right-12 text-warning animate-[pulse_1s_ease-in-out_infinite_0.5s]" size={24} />
          <Sparkles className="absolute top-40 left-20 text-error animate-[pulse_1s_ease-in-out_infinite_1s]" size={20} />
          <Sparkles className="absolute top-24 right-24 text-success animate-[pulse_1s_ease-in-out_infinite_1.5s]" size={28} />
        </>
      )}

      {/* Success Content */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4 animate-bounce">🎉</div>
        <h2 className="text-white mb-4">Order Completed!</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 inline-block">
          <p className="text-neutral-300 mb-2">You've earned</p>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-5xl font-bold text-brand-tertiary">+SAR 150</span>
          </div>
        </div>
        <p className="text-neutral-300 mt-4 max-w-sm">
          Great job! Keep up the good work.
        </p>
      </div>

      {/* Rating Section */}
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-6">
        <h6 className="text-white text-center mb-4">Rate this customer</h6>
        
        {/* Star Rating */}
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="transition-transform hover:scale-110"
            >
              <Star
                size={36}
                className={star <= rating ? 'text-warning fill-warning' : 'text-white/40'}
              />
            </button>
          ))}
        </div>

        {/* Quick Tags */}
        {rating > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-brand-tertiary text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm space-y-3">
        <Button
          className="w-full"
          onClick={() => navigate('/dashboard')}
        >
          BACK TO HOME
        </Button>
        <button
          onClick={() => navigate('/order-details')}
          className="w-full text-white/80 py-3 hover:text-white transition-colors"
        >
          View Order Details
        </button>
      </div>
    </div>
  );
}
