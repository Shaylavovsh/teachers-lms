import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon, UserIcon, UsersIcon, BookOpenIcon, GraduationCapIcon } from "lucide-react";

export default function Component() {
  const [openGroup, setOpenGroup] = useState(null);

  const handleToggle = (groupName) => {
    setOpenGroup(openGroup === groupName ? null : groupName);
  };

  const mentorInfo = {
    name: "Mirzaaliyev Bekzod",
    studentsCount: 73,
    groupsCount: 12,
    grade: "senior"
  };

  const groups = [
    { name: "FRONT-826", value: 1510167, students: [
      { name: "Azamat Shomaqsudov", darslarSoni: 12, kelgan: 12, kelmagan: 0, tolangan: 12, price: 221000 },
      { name: "Yahyo Tojiboyev", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
      { name: "Navruzbek Murodullayev", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
      { name: "Shag'zoda Mirhanova", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
      { name: "Asilbek Karimov", darslarSoni: 12, kelgan: 12, kelmagan: 0, tolangan: 12, price: 221000 },
      { name: "Shahriyor Shaylavov", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
      { name: "Kaya Serkan", darslarSoni: 12, kelgan: 10, kelmagan: 0, tolangan: 10, price: 184167 }
    ]},
    { name: "FRONT-908", value: 1012915, students: [
      { name: "Student 1", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
      { name: "Student 2", darslarSoni: 12, kelgan: 10, kelmagan: 2, tolangan: 11, price: 202583 },
    ]},
    { name: "FRONT-926", value: 1878503, students: [
      { name: "Student 1", darslarSoni: 12, kelgan: 12, kelmagan: 0, tolangan: 12, price: 221000 },
      { name: "Student 2", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
    ]},
    { name: "INPR-961", value: 1795000, students: [
      { name: "Student 1", darslarSoni: 12, kelgan: 10, kelmagan: 2, tolangan: 11, price: 202583 },
      { name: "Student 2", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
    ]},
    { name: "FRONT-998", value: 2136337, students: [
      { name: "Student 1", darslarSoni: 12, kelgan: 12, kelmagan: 0, tolangan: 12, price: 221000 },
      { name: "Student 2", darslarSoni: 12, kelgan: 11, kelmagan: 1, tolangan: 12, price: 221000 },
    ]},
  ];

  const totalAmount = groups.reduce((sum, group) => sum + group.value, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
        {/* Mentor Information Section */}
        <div className="w-full lg:w-1/4 bg-white rounded-lg shadow p-4 lg:sticky lg:top-4 lg:h-fit">
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
            <UserIcon className="h-6 w-6 text-orange-500 mr-2" />
            {mentorInfo.name}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <UsersIcon className="h-5 w-5 text-blue-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">O'quvchilar soni</p>
                <p className="text-lg font-bold text-gray-800">{mentorInfo.studentsCount}</p>
              </div>
            </div>
            <div className="flex items-center">
              <BookOpenIcon className="h-5 w-5 text-green-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Guruhlar soni</p>
                <p className="text-lg font-bold text-gray-800">{mentorInfo.groupsCount}</p>
              </div>
            </div>
            <div className="flex items-center">
              <GraduationCapIcon className="h-5 w-5 text-purple-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Grade</p>
                <p className="text-lg font-bold text-gray-800">{mentorInfo.grade}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Group Information Section */}
        <div className="w-full lg:w-3/4 bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center text-gray-800">
              <UsersIcon className="h-5 w-5 text-orange-500 mr-2" />
              Groups
              <span className="text-orange-500 ml-2 text-sm">(avgust)</span>
            </h3>
            <p className="text-xl font-bold text-teal-600">
              {totalAmount.toLocaleString()} <span className="text-sm font-normal text-gray-500">so'm</span>
            </p>
          </div>
          <div className="space-y-2">
            {groups.map((group) => (
              <div key={group.name} className="border rounded-lg overflow-hidden">
                <div
                  className="flex justify-between items-center p-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => handleToggle(group.name)}
                >
                  <p className="text-base font-medium text-gray-800">{group.name}</p>
                  <div className="flex items-center">
                    <p className="text-base font-semibold mr-2 text-gray-800">
                      {group.value.toLocaleString()} <span className="text-sm font-normal text-gray-500">so'm</span>
                    </p>
                    {openGroup === group.name ? (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {openGroup === group.name && (
                  <div className="p-3 bg-white rounded-b-lg shadow-inner overflow-x-auto">
                    <table className="min-w-full table-auto text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 text-left text-gray-600">Students</th>
                          <th className="px-3 py-2 text-left text-gray-600">Darslar Soni</th>
                          <th className="px-3 py-2 text-left text-gray-600">Darsga Kelgan</th>
                          <th className="px-3 py-2 text-left text-gray-600">Darsga Kelmagan</th>
                          <th className="px-3 py-2 text-left text-gray-600">To'langan</th>
                          <th className="px-3 py-2 text-left text-gray-600">Bir Oylik Darslar Uchun Haq Miqdori</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.students.map((student, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-3 py-2 text-gray-800">{index + 1}. {student.name}</td>
                            <td className="px-3 py-2 text-gray-800">{student.darslarSoni}</td>
                            <td className="px-3 py-2 text-gray-800">{student.kelgan}</td>
                            <td className="px-3 py-2 text-gray-800">{student.kelmagan}</td>
                            <td className="px-3 py-2 text-gray-800">{student.tolangan}</td>
                            <td className="px-3 py-2 text-gray-800">{student.price.toLocaleString()} so'm</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}