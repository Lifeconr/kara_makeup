const ContactInfo=()=> {
  return (
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
  );
}
export default ContactInfo;