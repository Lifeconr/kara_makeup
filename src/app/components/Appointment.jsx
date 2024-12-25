"use client";

import { useState } from "react";

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  const availableHours = ["8:10 - 10:00", "10:10 - 12:00", "12:10 - 14:00", "14:10 - 16:00"];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Make An Appointment
          </h2>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
            />
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
                      ? "bg-red-800 text-white border-red-800"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              // other functionality
            }}
            className="w-full bg-red-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-900 transition"
          >
            Make An Appointment
          </button>
        </div>
      </div>
    </section>
  );
}