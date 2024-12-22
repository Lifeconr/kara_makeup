"use client";

export default function QRCodePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/qr-code.png"; // Replace with your QR code image path
    link.download = "MyQRCode.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">QR Code</h1>
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
            <img
              src="/images/profile.jpg" // Replace with your profile image path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <img
            src="/images/qr-code.png" // Replace with your QR code image path
            alt="QR Code"
            className="w-40 h-40"
          />
        </div>
        <button
          onClick={handleDownload}
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Download My QR Code
        </button>
      </div>
    </div>
  );
}
