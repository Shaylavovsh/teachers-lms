import React from "react";
import { LuLayoutPanelLeft } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#16233B] text-white w-[117px] p-4 flex flex-col">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex flex-col text-center items-center space-x-2 cursor-pointer">
            <div className="">
              <LuLayoutPanelLeft className="w-[30px] h-[30px]" />
            </div>
            <span className="text-[15px] font-black">Панель Приборов</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-gray-700 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-3.59 0-6.5 2.91-6.5 6.5S8.41 21 12 21c3.59 0 6.5-2.91 6.5-6.5S15.59 8 12 8zm0 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0-10c1.66 0 3 1.34 3 3h-6c0-1.66 1.34-3 3-3z"
                />
              </svg>
            </div>
            <span>Salary</span>
          </div>
        </div>
      </div>

      <div className="w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold">Группы</div>
          <div className="flex items-center space-x-4">
            <select className="border p-2 rounded">
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>
            <span>Sunnatbek Yusupov</span>
            <button className="p-2 rounded bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m0 0c0-3.59-2.91-6.5-6.5-6.5S-4 8.41-4 12s2.91 6.5 6.5 6.5S9 15.59 9 12z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {[
            "FRONT-001",
            "FRONT-002",
            "FRONT-003",
            "FRONT-004",
            "FRONT-005",
          ].map((group, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center"
            >
              <div className="bg-yellow-500 rounded-full p-4 mx-auto w-16 h-16 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h1m0 0h-2v4h1m-4-4h4v-4m0 0H7v4h2z"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold">{group}</div>
              <div className="text-sm text-gray-500">Sunnatbek Yusupov</div>
              <div className="text-sm text-gray-500">Студенты: 9</div>
              <div className="text-sm text-gray-500">Время: 17:00</div>
              <button className="bg-teal-500 text-white rounded-lg px-4 py-2 mt-4">
                Проверять
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
