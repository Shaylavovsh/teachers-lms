import React, { useState, useEffect } from "react";

const studentsData = [
  {
    id: 1,
    name: "Botirov Muhammadali",
    league: "Кодеры",
    lastVisit: "26.06.2024",
    totalCoins: 2095,
    today: 2,
  },
  {
    id: 2,
    name: "Hasanov Zubayrxon",
    league: "Кодеры",
    lastVisit: "26.06.2024",
    totalCoins: 1053,
    today: 1,
  },
  // Other students...
];

const Students = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : studentsData;
  });

  const [attendance, setAttendance] = useState(() => {
    const savedAttendance = localStorage.getItem("attendance");
    return savedAttendance ? JSON.parse(savedAttendance) : {};
  });

  const [coinLimit, setCoinLimit] = useState(() => {
    const savedLimit = localStorage.getItem("coinLimit");
    return savedLimit ? JSON.parse(savedLimit) : 500;
  });

  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [students, attendance]);

  useEffect(() => {
    localStorage.setItem("coinLimit", JSON.stringify(coinLimit));
  }, [coinLimit]);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const updateCoins = (id, value) => {
    const student = students.find((s) => s.id === id);

    if (student.lastVisit === "Нет входа в Space") {
      showNotification(
        "Этот ученик не может получить монеты, так как нет входа в Space."
      );
      return;
    }

    if (coinLimit >= value || value < 0) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id
            ? {
                ...student,
                totalCoins: student.totalCoins + value,
                today: student.today + value,
              }
            : student
        )
      );
      setCoinLimit((prevLimit) => prevLimit - value);
    } else {
      showNotification("Недостаточно монет в лимите!");
    }
  };

  // Function to handle checkbox change
  const handleAttendance = (id, attended) => {
    const newAttendance = { ...attendance, [id]: attended };
    setAttendance(newAttendance);

    // Update local storage
    localStorage.setItem("attendance", JSON.stringify(newAttendance));

    if (attended) {
      updateCoins(id, 1); // Add 1 coin when a student attends the lesson
    } else {
      // Optionally handle the case when attendance is removed
      updateCoins(id, -1); // Remove 1 coin if unchecked
    }
  };

  // Function to check if the student attended based on local storage
  const didAttend = (id) => {
    return attendance[id] || false; // Default to false if not found
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 bg-gray-50 p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Front-001
      </h1>

      {/* Уведомление */}
      {notification && (
        <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-lg">
          {notification}
        </div>
      )}

      <div className="text-right mb-4">
        <span className="text-xl font-semibold">Лимит монет: {coinLimit}</span>
      </div>
      <table className="table-auto w-full bg-white rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Студенты
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Лига
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Последнее посещение
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Общий
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Сегодня
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Присутствие
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Действия
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t hover:bg-gray-50 transition-all"
            >
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.league}</td>
              <td
                className={`px-6 py-4 ${
                  student.lastVisit === "Нет входа в Space"
                    ? "text-red-500"
                    : ""
                }`}
              >
                {student.lastVisit}
              </td>
              <td className="px-6 py-4">{student.totalCoins}</td>
              <td className="px-6 py-4">{student.today}</td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked={didAttend(student.id)}
                  onChange={(e) => handleAttendance(student.id, e.target.checked)}
                  className="w-6 h-6 text-green-600"
                />
              </td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => updateCoins(student.id, -2)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  -2
                </button>
                <button
                  onClick={() => updateCoins(student.id, 1)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  1
                </button>
                <button
                  onClick={() => updateCoins(student.id, 3)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  3
                </button>
                <button
                  onClick={() => updateCoins(student.id, 5)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  5
                </button>
                <button
                  onClick={() => updateCoins(student.id, 10)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors"
                >
                  10
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
