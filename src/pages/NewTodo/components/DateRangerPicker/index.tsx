// src/components/DateRangePicker.tsx
import React, { useState } from 'react';
import DatePicker from '../DatePicker';

interface DateRangePickerProps {
    setStartDate: React.Dispatch<React.SetStateAction<Date>>
    setEndDate: React.Dispatch<React.SetStateAction<Date>>
    startDate: Date
    endDate: Date
}

const DateRangePicker = ({
    endDate,
    setEndDate,
    setStartDate,
    startDate
}: DateRangePickerProps) => {


    return (
        <div className=" bg-white justify-between  flex w-full">
            <DatePicker label="Data Inicial" date={startDate} setDate={setStartDate} />
            <DatePicker className='text-right' label="Data Final" date={endDate} setDate={setEndDate} />
        </div>
    );
};

export default DateRangePicker;
