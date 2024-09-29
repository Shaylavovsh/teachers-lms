import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaBook, FaChevronRight } from 'react-icons/fa'; // Using icons

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white shadow-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Проекты</h2>
        <ul className="space-y-4">
          {Array(10).fill('Front-Endga kirish').map((project, index) => (
            <li key={index}>
              <Link to="/group"> {/* This will navigate to the Group component */}
                <button className="w-full text-left text-gray-700 hover:text-white flex items-center py-3 px-4 bg-gray-50 hover:bg-indigo-500 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                  <FaBook className="mr-3 text-indigo-400" />
                  {project}
                </button>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-between text-sm text-gray-500">
          <span>1 / 6</span>
          <button className="hover:text-indigo-600">
            <FaChevronRight />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 relative">
        <h1 className="text-3xl font-bold text-gray-700 mb-8">Homework</h1>

        {/* Refresh Button */}
        <button className="absolute right-10 top-10 bg-green-500 text-white py-3 px-5 rounded-lg hover:bg-green-600 shadow-lg transition-all duration-200">
          Обновить
        </button>

        <table className="w-full bg-white shadow-lg rounded-lg mt-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Студенты</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Статус</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Отметка</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-700">Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Botirov Muhammadali', status: 'Not Checked', grade: '-', comment: '-' },
              { name: 'Hasanov Zubayrxon', status: 'Not Uploaded', grade: '-', comment: '-' },
              { name: 'Jaloliddin Inomov', status: 'Not Uploaded', grade: '-', comment: '-' },
              { name: 'Jaloliddin Inomov', status: 'Checked', grade: '100', comment: '-', gradeColor: 'bg-yellow-400' },
              { name: 'Mirzohidov Umidjon', status: 'Denied', grade: '0', comment: '-', gradeColor: 'bg-red-400' },
              { name: 'Safarov Sanjar', status: 'Not Uploaded', grade: '-', comment: '-' },
              { name: 'Samir Sadullayev', status: 'Not Uploaded', grade: '-', comment: '-' },
              { name: 'Sherzod Skandarov', status: 'Checked', grade: '75', comment: '-', gradeColor: 'bg-green-400' },
              { name: 'Suxrob Sadullayev', status: 'Not Checked', grade: '-', comment: '-' },
              { name: 'Elshod Turgunjonov', status: 'Not Uploaded', grade: '-', comment: '-' },
            ].map((student, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">{student.name}</td>
                <td className={`px-6 py-4 text-${student.status === 'Denied' ? 'red' : 'green'}-500`}>
                  {student.status}
                </td>
                <td className="px-6 py-4">
                  {student.grade === '-' ? '-' : (
                    <span className={`text-white py-1 px-3 rounded-lg ${student.gradeColor}`}>
                      {student.grade}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">{student.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default HomePage;
