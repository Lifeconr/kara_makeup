// src/app/pages/Appointment.jsx
"use client"; // Add this at the very top

import { useState } from "react";

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  const availableHours = ["8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00", "8:10 - 20:00"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-semibold text-center mb-4 text-gray-800">Make An Appointment</h1>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Date:
          </label>
          <div className="relative">
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="hour" className="block text-sm font-medium text-gray-700 mb-2">
            Hour:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {availableHours.map((hour, index) => (
              <button
                key={index}
                onClick={() => setSelectedHour(hour)}
                className={`py-2 px-4 text-sm font-medium border rounded-md ${
                  selectedHour === hour
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => alert(`Appointment set for ${selectedDate} at ${selectedHour}`)}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Make An Appointment
        </button>
      </div>
    </div>
  );
}
