import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Welcome to Your Landing Page
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            trhrthbrgt
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Projects Showcase</h2>
              <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita fugiat id sunt, nisi mollitia odio autem molestiae natus numquam illo animi aspernatur at aperiam veritatis, sit tenetur molestias laborum illum?              </p>
            </div>
            <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Sthgghtre</h2>
              <p className="text-lg">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita fugiat id sunt, nisi mollitia odio autem molestiae natus numquam illo animi aspernatur at aperiam veritatis, sit tenetur molestias laborum illum?
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
