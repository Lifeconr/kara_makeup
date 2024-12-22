
import Image from 'next/image'; // Import the Image component
import profilepic from '../asset/img/profile-pic.jpg'; 

const AboutCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center">
          <Image
            src={profilepic}
            alt="Kara Frederick"
            width={96} // Specify width (24 * 4)
            height={96} // Specify height (24 * 4)
            className="rounded-full mr-6" // Use className for styling
          />
          <div>
            <h2 className="text-2xl font-bold">Kara Frederick</h2>
            <p className="text-gray-600">Make-up Artist</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever since the 1500s.
        </p>
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center bg-gray-100 p-4 rounded-md">
          <span className="material-icons text-xl mr-4">email</span>
          <p>kara@gmail.com</p>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-md">
          <span className="material-icons text-xl mr-4">phone</span>
          <p>+1 407-846-7478</p>
        </div>
        <div className="flex items-center bg-gray-100 p-4 rounded-md">
          <span className="material-icons text-xl mr-4">location_on</span>
          <p>New York, USA</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default AboutCard;