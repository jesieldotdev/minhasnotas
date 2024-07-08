// src/components/DatePicker.tsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

interface DatePickerProps {
  label: string;
  date: Date;
  setDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, date, setDate }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (newDate: Date | Date[]) => {
    setDate(newDate as Date);
    setIsOpen(false); // Close the calendar after selecting a date
  };

  return (
    <div className="relative w-fit h-fit mx-auto p-4 bg-white rounded-3xl  mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <button
        onClick={toggleCalendar}
        className="w-full px-4 py-2 text-sm text-left bg-white border border-gray-300 rounded-full focus:outline-none"
      >
        {date.toLocaleDateString('pt-BR', { month: 'long', day: 'numeric' })}
      </button>
      {isOpen && (
        <div className="fixed bottom-20 left-50 right-0 z-50 mt-2 p-4 bg-white rounded-3xl shadow-lg h-fit w-fit">
          <Calendar onChange={onChange} value={date}   className="rounded-3xl " locale="pt-BR" />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
