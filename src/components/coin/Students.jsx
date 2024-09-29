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
  {
    id: 3,
    name: "Jaloliddin Inomov",
    league: "Кодеры",
    lastVisit: "26.06.2024",
    totalCoins: 1433,
    today: 1,
  },
  {
    id: 4,
    name: "Jaloliddin Inomov",
    league: "Ligas.null",
    lastVisit: "Нет входа в Space",
    totalCoins: 1,
    today: 1,
  },
  {
    id: 5,
    name: "Mirzohidov Umidjon",
    league: "Хакеры",
    lastVisit: "26.06.2024",
    totalCoins: 975,
    today: 1,
  },
  {
    id: 6,
    name: "Safarov Sanjar",
    league: "Кодеры",
    lastVisit: "26.06.2024",
    totalCoins: 996,
    today: 1,
  },
  {
    id: 7,
    name: "Samir Sadullayev",
    league: "Геймеры",
    lastVisit: "10.06.2024",
    totalCoins: 2413,
    today: 1,
  },
  {
    id: 8,
    name: "Sherzod skandarov",
    league: "Кодеры",
    lastVisit: "26.06.2024",
    totalCoins: 1029,
    today: 1,
  },
  {
    id: 9,
    name: "Suxrob Sadullayev",
    league: "Кодеры",
    lastVisit: "10.06.2024",
    totalCoins: 1193,
    today: 1,
  },
  {
    id: 10,
    name: "Elshod Turgunjonov",
    league: "Геймеры",
    lastVisit: "26.06.2024",
    totalCoins: 1252,
    today: 1,
  },
];

const Students = () => {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : studentsData;
  });

  const [coinLimit, setCoinLimit] = useState(() => {
    const savedLimit = localStorage.getItem("coinLimit");
    return savedLimit ? JSON.parse(savedLimit) : 500;
  });

  const [notification, setNotification] = useState(""); // Для хранения уведомления

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("coinLimit", JSON.stringify(coinLimit));
  }, [coinLimit]);

  // Функция для отображения уведомления
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(""); // Убрать уведомление через 3 секунды
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
