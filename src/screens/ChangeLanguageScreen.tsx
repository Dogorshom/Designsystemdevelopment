import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';

export function ChangeLanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'اُرْدُوْ', flag: '🇵🇰' },
    { code: 'bn', name: 'বাঙ্গালী', flag: '🇧🇩' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Change Language" />

      <div className="screen-padding py-6">
        <Card>
          <div className="divide-y divide-neutral-300">
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`w-full flex items-center gap-4 py-4 ${
                  index === 0 ? '' : ''
                } hover:bg-neutral-100 transition-colors`}
              >
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-2xl">
                  {lang.flag}
                </div>
                <span className="flex-1 text-left">{lang.name}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedLanguage === lang.code
                      ? 'border-brand-secondary'
                      : 'border-neutral-400'
                  }`}
                >
                  {selectedLanguage === lang.code && (
                    <div className="w-3 h-3 rounded-full bg-brand-secondary" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
