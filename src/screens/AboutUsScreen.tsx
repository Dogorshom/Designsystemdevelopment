import React from 'react';
import { Header } from '../components/Header';

export function AboutUsScreen() {
  const [language] = React.useState('en');

  const aboutUrl = language === 'ar'
    ? 'https://fazaa.com/ar/about'
    : 'https://fazaa.com/en/about';

  return (
    <div className="h-screen flex flex-col bg-neutral-100">
      <Header showBack title="About Us" />
      
      <div className="flex-1 screen-padding py-6">
        <div className="bg-white rounded-2xl p-6 h-full overflow-y-auto">
          <h4 className="mb-4">About Fazaa</h4>
          <div className="space-y-4 text-neutral-700">
            <p>
              Fazaa is the leading roadside assistance platform in Saudi Arabia, 
              connecting service providers with drivers who need immediate help on the road.
            </p>
            <p>
              Our mission is to empower roadside service providers by offering them flexible 
              work opportunities and fair compensation while ensuring drivers receive 
              fast, reliable assistance whenever they need it.
            </p>
            <h6 className="mt-6 mb-3">Our Services</h6>
            <ul className="space-y-2 list-disc list-inside">
              <li>Battery Replacement</li>
              <li>Tire Change & Repair</li>
              <li>Jump Start Services</li>
              <li>Fuel Delivery</li>
              <li>Lockout Assistance</li>
              <li>Towing Services</li>
            </ul>
            <h6 className="mt-6 mb-3">Our Values</h6>
            <ul className="space-y-2 list-disc list-inside">
              <li>Quick Response Time</li>
              <li>Fair Compensation</li>
              <li>Provider & Driver Safety</li>
              <li>Customer Satisfaction</li>
              <li>24/7 Support</li>
            </ul>
            <h6 className="mt-6 mb-3">Contact Information</h6>
            <p>Email: support@fazaa.com</p>
            <p>Phone: +966 800 123 456</p>
            <p>Website: www.fazaa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}