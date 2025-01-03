'use client';

import { useState } from "react";

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [errorMessage, setErrorMessage] = useState({ date: "", hour: "" });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const availableHours = [
    "8:10 - 10:00",
    "10:10 - 12:00",
    "12:10 - 14:00",
    "14:10 - 16:00"
  ];

  const handleMakeAppointment = () => {
    let hasError = false;

    if (!selectedDate) {
      setErrorMessage((prev) => ({ ...prev, date: "Please select a date." }));
      hasError = true;
    } else {
      setErrorMessage((prev) => ({ ...prev, date: "" }));
    }

    if (!selectedHour) {
      setErrorMessage((prev) => ({ ...prev, hour: "Please select an hour." }));
      hasError = true;
    } else {
      setErrorMessage((prev) => ({ ...prev, hour: "" }));
    }

    if (!hasError) {
      setConfirmationMessage(`You selected ${selectedDate} at ${selectedHour}.`);
      const paymentSection = document.getElementById("payment");
      if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="appointment" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Make An Appointment
        </h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setErrorMessage((prev) => ({ ...prev, date: "" }));
                setSelectedHour(""); // Deselect hour when date changes
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
            />
            {errorMessage.date && (
              <p className="text-red-600 text-sm mt-1">{errorMessage.date}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="hour" className="block text-sm font-medium text-gray-700 mb-2">
              Hour:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableHours.map((hour, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedHour((prevHour) => (prevHour === hour ? "" : hour)); // Toggle selection
                    setErrorMessage((prev) => ({ ...prev, hour: "" }));
                  }}
                  className={`py-2 px-4 text-sm font-medium border rounded-md transition-colors duration-200 ${
                    selectedHour === hour
                      ? "bg-red-800 text-white border-red-800"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
            {errorMessage.hour && (
              <p className="text-red-600 text-sm mt-1">{errorMessage.hour}</p>
            )}
          </div>
          {confirmationMessage && (
            <p className="text-green-600 text-sm mb-4">{confirmationMessage}</p>
          )}
          <button
            onClick={handleMakeAppointment}
            className="w-full bg-red-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-900 transition"
          >
            Make An Appointment
          </button>
        </div>
      </div>
    </section>
  );
}