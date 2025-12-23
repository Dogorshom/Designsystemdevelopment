import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Send, Mic, Paperclip, Play, Pause } from 'lucide-react';

export function ChatScreen() {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const messages = [
    { id: 1, sender: 'customer', text: 'Hi, are you on your way?', time: '10:30 AM', type: 'text' },
    { id: 2, sender: 'me', text: 'Yes, I just picked up your order. Will be there in 15 minutes.', time: '10:31 AM', type: 'text' },
    { id: 3, sender: 'customer', text: 'Great! Please call me when you arrive.', time: '10:32 AM', type: 'text' },
    { id: 4, sender: 'me', type: 'voice', duration: '0:12', time: '10:33 AM' },
    { id: 5, sender: 'customer', type: 'voice', duration: '0:08', time: '10:34 AM' },
    { id: 6, sender: 'me', text: 'Sure, will do!', time: '10:35 AM', type: 'text' }
  ];

  const toggleVoicePlayback = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-100">
      <Header showBack title="Sarah Ahmed" />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto screen-padding py-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="max-w-[75%]">
              {msg.type === 'text' ? (
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === 'me'
                      ? 'gradient-action text-white rounded-br-sm'
                      : 'bg-white text-neutral-900 rounded-bl-sm card-shadow'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ) : (
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === 'me'
                      ? 'gradient-action text-white rounded-br-sm'
                      : 'bg-white text-neutral-900 rounded-bl-sm card-shadow'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-[180px]">
                    <button
                      onClick={() => toggleVoicePlayback(msg.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        msg.sender === 'me' ? 'bg-white/20' : 'bg-brand-secondary/10'
                      }`}
                    >
                      {playingId === msg.id ? (
                        <Pause size={16} className={msg.sender === 'me' ? 'text-white' : 'text-brand-secondary'} />
                      ) : (
                        <Play size={16} className={msg.sender === 'me' ? 'text-white' : 'text-brand-secondary'} />
                      )}
                    </button>
                    <div className="flex-1 flex items-center gap-2">
                      {/* Waveform visualization */}
                      <div className="flex-1 flex items-center gap-0.5 h-6">
                        {[3, 6, 4, 8, 5, 7, 4, 9, 6, 5, 7, 4].map((height, i) => (
                          <div
                            key={i}
                            className={`w-0.5 rounded-full ${
                              msg.sender === 'me' ? 'bg-white/60' : 'bg-brand-secondary/40'
                            }`}
                            style={{ height: `${height * 2}px` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs opacity-80">{msg.duration}</span>
                    </div>
                  </div>
                </div>
              )}
              <p className={`text-xs text-neutral-500 mt-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="bg-white border-t border-neutral-300 screen-padding py-4 safe-area-bottom">
        <div className="flex items-center gap-3">
          <button className="text-neutral-600 touch-target">
            <Paperclip size={24} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 h-12 px-4 bg-neutral-200 rounded-full outline-none"
          />
          {message ? (
            <button className="w-12 h-12 rounded-full gradient-action flex items-center justify-center">
              <Send size={20} className="text-white" />
            </button>
          ) : (
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                isRecording ? 'bg-error animate-[pulse_1s_ease-in-out_infinite]' : 'bg-neutral-200'
              }`}
            >
              <Mic size={20} className={isRecording ? 'text-white' : 'text-neutral-700'} />
            </button>
          )}
        </div>
        {isRecording && (
          <div className="mt-3 flex items-center gap-3 px-4">
            <div className="w-2 h-2 bg-error rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="text-sm text-error">Recording... 0:05</span>
            <button className="ml-auto text-brand-secondary text-sm">Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}