import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { StatusPill } from '../components/StatusPill';
import { Plus } from 'lucide-react';

export function SupportTicketsScreen() {
  const navigate = useNavigate();
  const [tickets] = useState([
    { id: '123', subject: 'Payment not received', status: 'open', date: 'Dec 20, 2024 10:30 AM' },
    { id: '122', subject: 'App crashes on order accept', status: 'in-progress', date: 'Dec 19, 2024 3:45 PM' },
    { id: '121', subject: 'Wrong delivery address shown', status: 'resolved', date: 'Dec 18, 2024 1:20 PM' },
    { id: '120', subject: 'Unable to update profile photo', status: 'resolved', date: 'Dec 17, 2024 9:15 AM' }
  ]);

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header showBack title="Support Tickets" />

      <div className="screen-padding py-6 pb-24">
        {tickets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-600 mb-4">No support tickets found</p>
            <p className="text-sm text-neutral-500">Create a ticket if you need help</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <Card key={ticket.id}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-brand-secondary underline">#{ticket.id}</p>
                  </div>
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
                <p className="mb-2">{ticket.subject}</p>
                <p className="text-sm text-neutral-600">{ticket.date}</p>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-5 w-14 h-14 rounded-full gradient-action shadow-2xl flex items-center justify-center z-20">
        <Plus size={28} className="text-white" />
      </button>
    </div>
  );
}
