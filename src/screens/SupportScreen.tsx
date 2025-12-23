import React, { useState } from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { Card } from '../components/Card';
import { StatusPill } from '../components/StatusPill';
import { Phone, MessageCircle, HelpCircle, FileText, AlertCircle } from 'lucide-react';

export function SupportScreen() {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  const quickHelp = [
    { icon: Phone, label: 'Call Support', action: 'tel:+971800123456' },
    { icon: MessageCircle, label: 'Live Chat', action: 'chat' },
    { icon: HelpCircle, label: 'FAQ', action: 'faq' },
    { icon: FileText, label: 'Report Issue', action: 'report' }
  ];

  const tickets = [
    {
      id: 1,
      title: 'Payment not received',
      status: 'open',
      date: 'Today, 10:30 AM',
      description: 'Weekly payout for last week has not been received yet'
    },
    {
      id: 2,
      title: 'App crash issue',
      status: 'in-progress',
      date: 'Yesterday',
      description: 'App crashes when trying to accept orders'
    },
    {
      id: 3,
      title: 'Wrong delivery address',
      status: 'resolved',
      date: '2 days ago',
      description: 'Customer provided wrong address for order #54312'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-100 pb-24">
      <Header showBack title="Support & Help" />

      <div className="screen-padding py-6">
        {/* Emergency Alert */}
        <Card className="bg-error-light border-2 border-error/20 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={24} className="text-error flex-shrink-0 mt-1" />
            <div>
              <h6 className="text-error mb-1">Emergency Assistance</h6>
              <p className="text-sm text-neutral-700 mb-3">
                If you need immediate help or are in danger, call emergency services
              </p>
              <a
                href="tel:999"
                className="inline-flex items-center gap-2 px-4 h-10 bg-error text-white rounded-xl"
              >
                <Phone size={16} />
                Call 999
              </a>
            </div>
          </div>
        </Card>

        {/* Quick Help */}
        <h5 className="mb-4">Quick Help</h5>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {quickHelp.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="text-center cursor-pointer hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-xl gradient-action flex items-center justify-center mx-auto mb-3">
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-sm">{item.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Support Tickets */}
        <div className="flex items-center justify-between mb-4">
          <h5>Your Tickets</h5>
          <button className="text-brand-secondary text-sm">Create New</button>
        </div>

        <div className="space-y-3">
          {tickets.map((ticket) => (
            <Card key={ticket.id}>
              <div
                className="cursor-pointer"
                onClick={() => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h6>{ticket.title}</h6>
                  <StatusPill
                    status={
                      ticket.status === 'open'
                        ? 'warning'
                        : ticket.status === 'in-progress'
                        ? 'info'
                        : 'success'
                    }
                  >
                    {ticket.status === 'open'
                      ? 'Open'
                      : ticket.status === 'in-progress'
                      ? 'In Progress'
                      : 'Resolved'}
                  </StatusPill>
                </div>
                <p className="text-sm text-neutral-600 mb-2">{ticket.date}</p>
                {selectedTicket === ticket.id && (
                  <div className="pt-3 border-t border-neutral-300 mt-3">
                    <p className="text-sm">{ticket.description}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <Card className="mt-6">
          <h6 className="mb-4">Contact Information</h6>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Phone Support</p>
                <p>+971 800 123 456</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={20} className="text-neutral-600" />
              <div>
                <p className="text-sm text-neutral-600">Email Support</p>
                <p>support@fazaa.com</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav active="support" />
    </div>
  );
}
