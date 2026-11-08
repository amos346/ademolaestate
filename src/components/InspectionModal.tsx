import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Building2 } from 'lucide-react';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Physical Tour');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-md">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-25 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-neutral-900">Inspection Scheduled!</h3>
            <p className="text-sm text-neutral-600 font-light max-w-sm mx-auto">
              Thank you {name}. Our Ademola Real Estate VIP concierge team has received your booking request for {propertyTitle || 'our luxury portfolio'} and will call you shortly to confirm.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-3 bg-neutral-900 text-white font-bold rounded-xl text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-neutral-950 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">Schedule VIP Inspection</h3>
                <p className="text-xs text-neutral-500">Book a private tour with Ademola Real Estate</p>
              </div>
            </div>

            {propertyTitle && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold truncate">Target: {propertyTitle}</span>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase font-semibold text-neutral-700 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Chief Adebayo Johnson"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold text-neutral-700 mb-1">Phone / WhatsApp Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234 803 000 0000"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-semibold text-neutral-700 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-semibold text-neutral-700 mb-1">Tour Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  <option value="Physical Tour">In-Person VIP Tour</option>
                  <option value="Virtual Zoom Tour">Live Virtual Walkthrough</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Confirm Inspection Booking</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
