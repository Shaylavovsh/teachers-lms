import React from 'react';
import GroupCard from '../components/ GroupCard';

const Dashboard = () => {
  const groups = [
    { id: 'F1-1779', instructor: 'Mirzaaliyev Bekzod', type: 'Juft', students: 6, time: '17:30', color: 'bg-orange-500' },
    { id: 'F2-1063', instructor: 'Mirzaaliyev Bekzod', type: 'Juft', students: 9, time: '18:40', color: 'bg-orange-500' },
    { id: 'F2-1703', instructor: 'Mirzaaliyev Bekzod', type: 'Toq', students: 6, time: '09:00', color: 'bg-orange-500' },
    { id: 'FRONT-1010', instructor: 'Mirzaaliyev Bekzod', type: 'Toq', students: 12, time: '10:10', color: 'bg-yellow-400' },
    { id: 'FRONT-1012', instructor: 'Mirzaaliyev Bekzod', type: 'Toq', students: 12, time: '15:10', color: 'bg-yellow-400' },
    { id: 'FRONT-908', instructor: 'Mirzaaliyev Bekzod', type: 'Toq', students: 7, time: '16:20', color: 'bg-yellow-400' },
    { id: 'FRONT-926', instructor: 'Mirzaaliyev Bekzod', type: 'Juft', students: 7, time: '09:00', color: 'bg-yellow-400' },
    { id: 'FRONT-998', instructor: 'Mirzaaliyev Bekzod', type: 'Juft', students: 9, time: '15:10', color: 'bg-yellow-400' },
    { id: 'INPR-1021', instructor: 'Mirzaaliyev Bekzod', type: 'Juft', students: 1, time: '13:30', color: 'bg-orange-500' },
    { id: 'INPR-1641', instructor: 'Mirzaaliyev Bekzod', type: 'Toq', students: 1, time: '14:00', color: 'bg-orange-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
        Guruhlar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
