import Image from "next/image";
import profilepic from "../asset/img/profilepic.jpg";

const KaraInfo  = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-edf6f9">
      <div className="shadow-md rounded-lg p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <Image
            src={profilepic}
            alt="Kara Frederick"
            width={96}
            height={96}
            className="rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-2xl font-bold text-800e13 font-serif">
              Kara Frederick
            </h2>
            <p className="text-gray-600 font-serif">Make-up Artist</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 font-serif">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever since the 1500s.
        </p>

        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center bg-gray-100 p-4 rounded-md">
              <span className="material-icons text-800e13 text-xl mr-4">
                email
              </span>
              <p className="text-800e13 font-serif">kara@gmail.com</p>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-md">
              <span className="material-icons text-800e13 text-xl mr-4">
                phone
              </span>
              <p className="text-800e13 font-serif">+251 91 111 1111</p>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-md">
              <span className="material-icons text-800e13 text-xl mr-4">
                location_on
              </span>
              <p className="text-800e13 font-serif">Ethiopia, AA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaraInfo;
