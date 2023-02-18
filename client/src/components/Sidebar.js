import React from 'react';

function AppSidebar() {
  return (
    <div className="bg-skyblue">
      <div className="min-h-screen flex flex-row bg-teal-600">
        <div className="flex flex-col w-56 bg-skyblue rounded-r-3xl overflow-hidden">
          <ul className="flex flex-col py-4">
            <li>
              <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                <span className="text-sm font-medium font-bold text-white">View My Images</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                <span className="text-sm font-medium font-bold text-white">View All Images</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                <span className="text-sm font-medium font-bold text-white">View All Transactions</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const [showAppSidebar, setShowAppSidebar] = React.useState(false);

  return (
    <div className="bg-white">
      <div className="bg-teal-600 h-16 flex items-center">
        <button
          className="px-4 py-2 bg-white-500 text-white rounded-md mr-4 ml-4"
          onClick={() => setShowAppSidebar(!showAppSidebar)}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M2.99995 6.00005H21V8.00005H2.99995V6.00005ZM2.99995 11.0001H21V13.0001H2.99995V11.0001ZM21 18.0001H2.99995V16.0001H21V18.0001Z"></path>
          </svg>
        </button>

        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl text-white font-bold py-2">App Name</h1>
        </div>
      </div>

      <div className="flex flex-row">
        {showAppSidebar && <AppSidebar />}
      </div>
    </div>
  );
}

export default Sidebar ;
