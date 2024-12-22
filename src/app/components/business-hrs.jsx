"use client";

const BusinessHours = () => {
  const hours = [
    { day: "Monday", time: "12:00 AM - 12:00 AM" },
    { day: "Tuesday", time: "12:00 AM - 12:00 AM" },
    { day: "Wednesday", time: "12:00 AM - 12:00 AM" },
    { day: "Thursday", time: "12:00 AM - 12:00 AM" },
    { day: "Friday", time: "12:00 AM - 12:00 AM" },
    { day: "Saturday", time: "12:00 AM - 12:00 AM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Business Hours</h2>
        <div className="w-16 h-1 mx-auto bg-orange-500 mb-6"></div>
        <div className="bg-white shadow-md rounded-lg p-4">
          {hours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b py-2 px-4 last:border-0"
            >
              <span className="text-gray-700 font-medium">{item.day}</span>
              <span className="text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
