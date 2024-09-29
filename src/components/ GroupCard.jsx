import React from 'react';

const GroupCard = ({ group }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className={`${group.color} p-3`}>
        <img src="/placeholder.svg?height=24&width=60" alt="MARS" className="h-6 mx-auto mb-2" />
        <h3 className="text-2xl font-bold text-white text-center">{group.id}</h3>
        <p className="text-white text-center text-sm">{group.instructor} | {group.type}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">Talabalar</span>
          <span className="text-xl font-bold">{group.students}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-sm">Vaqt</span>
          <span className="text-lg font-semibold">{group.time}</span>
        </div>
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded text-sm">
          Tekshirish
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
