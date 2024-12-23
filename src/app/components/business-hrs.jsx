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
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">Business Hours</h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-10"></div>
        <div className="bg-white shadow-md rounded-lg p-6">
          {hours.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b py-2 last:border-0 text-sm md:text-base"
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
