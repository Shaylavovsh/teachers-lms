import React from 'react';

const TeacherRatingTable = () => {
  const teachers = [
    {
      id: '1',
      name: 'Abdulaziz Yormatov',
      ratings: {
        qa_audit: 30,
        retention_score: 0,
        ketganlar_soni: 20,
        space_usage: 20,
        total: 100,
      },
    },
    {
      id: '2',
      name: 'Abdurashid Umarov',
      ratings: {
        qa_audit: 30,
        retention_score: 0,
        ketganlar_soni: 20,
        space_usage: 20,
        total: 100,
      },
    },
    {
      id: '3',
      name: 'Amirullo Ibaydillayev',
      ratings: {
        qa_audit: 30,
        retention_score: 0,
        ketganlar_soni: 20,
        space_usage: 20,
        total: 100,
      },
    },
    {
      id: '4',
      name: 'Ertan Emirxan',
      ratings: {
        qa_audit: 30,
        retention_score: 0,
        ketganlar_soni: 20,
        space_usage: 20,
        total: 100,
      },
    },
    {
      id: '5',
      name: 'Eshonqulov Husan',
      ratings: {
        qa_audit: 30,
        retention_score: 0,
        ketganlar_soni: 20,
        space_usage: 20,
        total: 100,
      },
    },
    {
      id: '6',
      name: 'Mirzaaliyev Bekzod',
      ratings: {
        qa_audit: 30,
        retention_score: 0,
        ketganlar_soni: 10,
        space_usage: 0,
        total: 70,
      },
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">O'qituvchi Reytingi</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mentor
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              QA Audit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ketganlar Soni
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Retention Score
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Space Usage
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teachers.map((teacher, index) => (
            <tr key={teacher.id} className={teacher.ratings.total < 100 ? 'bg-red-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{index + 1}. {teacher.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  QA Audit: {teacher.ratings.qa_audit}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${teacher.ratings.ketganlar_soni < 20 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                  Ketganlar Soni: {teacher.ratings.ketganlar_soni}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  Retention Score: {teacher.ratings.retention_score}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                  Space Usage: {teacher.ratings.space_usage}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Total: {teacher.ratings.total}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherRatingTable;
