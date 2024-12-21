
const OurServices = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Our Services
        </h2>
        {/* Underline */}
        <div className="w-16 h-1 mx-auto bg-red-600 mb-10"></div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-red-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-brush"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Makeup</h3>
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered alteration in some form.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-red-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-brush"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Makeup</h3>
            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum but the
              majority have suffered alteration in some form.
            </p>
          </div>
        </div>

        {/* Button to View Service Menu */}
        <div className="flex justify-center mt-8">
          <a href="/ourservices" className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:shadow-md transition-shadow">
            View Service Menu
          </a>
        </div>
      </div>
    </section>
  );
  
};

export default OurServices;