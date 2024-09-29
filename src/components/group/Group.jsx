import React from 'react';

const Group = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Group Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Group Card 1 */}
        <div className="bg-indigo-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-indigo-800 mb-2">Group Name 1</h2>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            View Details
          </button>
        </div>

        {/* Group Card 2 */}
        <div className="bg-green-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-green-800 mb-2">Group Name 2</h2>
          <p className="text-sm text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            View Details
          </button>
        </div>

        {/* Add more group cards as needed */}
      </div>
    </div>
  );
};

export default Group;
