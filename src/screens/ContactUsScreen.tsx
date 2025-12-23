import React from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { MessageCircle, Instagram, Music, Phone, Mail, ChevronRight } from 'lucide-react';

export function ContactUsScreen() {
  const contactMethods = [
    { icon: MessageCircle, label: 'WhatsApp', color: 'text-success', url: 'https://wa.me/966501234567' },
    { icon: Instagram, label: 'Instagram', color: 'text-error', url: 'https://instagram.com/fazaa' },
    { icon: Music, label: 'TikTok', color: 'text-neutral-900', url: 'https://tiktok.com/@fazaa' },
    { icon: Phone, label: 'Call Us', color: 'text-info', url: 'tel:+966800123456' },
    { icon: Mail, label: 'Email', color: 'text-brand-secondary', url: 'mailto:support@fazaa.com' }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Contact Us" />

      <div className="screen-padding py-6">
        <p className="text-neutral-600 mb-6">
          Get in touch with us through any of these channels
        </p>

        <div className="space-y-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index}>
                <a
                  href={method.url}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-neutral-200 flex items-center justify-center">
                      <Icon size={22} className={method.color} />
                    </div>
                    <span>{method.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-neutral-400" />
                </a>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <Card className="mt-6">
          <h6 className="mb-3">Business Hours</h6>
          <div className="space-y-2 text-sm text-neutral-700">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
