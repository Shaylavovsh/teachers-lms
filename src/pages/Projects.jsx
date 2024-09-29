import React from 'react'
import { ChevronRight, ChevronLeft } from "lucide-react"

const projects = [
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
  "1. Front-Endga kirish",
]

const students = [
  { name: "Botirov Muhammadali", status: "Not Checked", grade: "-", comment: "-" },
  { name: "Hasanov Zubayruon", status: "Not Uploaded", grade: "-", comment: "-" },
  { name: "Jaloliddin Inomov", status: "Not Uploaded", grade: "-", comment: "-" },
  { name: "Jaloliddin Inomov", status: "Checked", grade: "100", comment: "-" },
  { name: "Mirzohidov Umidjon", status: "Denied", grade: "0", comment: "-" },
  { name: "Safarov Sanjar", status: "Not Uploaded", grade: "-", comment: "-" },
  { name: "Samir Sadullayev", status: "Not Uploaded", grade: "-", comment: "-" },
  { name: "Sherzod skandarov", status: "Checked", grade: "75", comment: "-" },
  { name: "Suxrob Sadullayev", status: "Not Checked", grade: "-", comment: "-" },
  { name: "Elshod Turgunjonov", status: "Not Uploaded", grade: "-", comment: "-" },
]

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white p-4 shadow-md overflow-y-auto">
        <h2 className="mb-4 text-lg font-semibold bg-red-50 p-2 rounded-md ">Проекты</h2>
        <ul className="space-y-2">
          {projects.map((project, index) => (
            <li key={index} className=" p-2 rounded">{project}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center">
            <span className="text-red-500 mr-2">O</span> Front-001
          </h1>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Обновить
          </button>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4 flex justify-between items-center">
              Homework
              <ChevronRight className="text-gray-400" />
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Студенты</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Отметка</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Комментарий</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded text-xs ${
                          student.status === "Checked" ? "bg-green-100 text-green-800" :
                          student.status === "Not Checked" ? "bg-yellow-100 text-yellow-800" :
                          student.status === "Denied" ? "bg-red-100 text-red-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded ${
                          student.grade === "100" ? "bg-green-500 text-white" :
                          student.grade === "0" ? "bg-red-500 text-white" :
                          student.grade === "75" ? "bg-emerald-500 text-white" : ""
                        }`}>
                          {student.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <footer className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ChevronLeft className="text-gray-400" />
            <span>1 / 6</span>
            <ChevronRight className="text-gray-400" />
          </div>
        </footer>
      </div>
    </div>
  )
}