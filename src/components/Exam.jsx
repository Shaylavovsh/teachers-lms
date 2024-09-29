import React, { useState } from 'react';
import { ChevronDownIcon, CalendarIcon, CheckCircleIcon, FileIcon, XCircleIcon } from 'lucide-react';
import Navbar from './Navbar';

export default function Imtihon() {
  const [tanlanganRaqam, setTanlanganRaqam] = useState(1);
  const [tanlanganSana, setTanlanganSana] = useState('2024-09-02');
  const [talabalar, setTalabalar] = useState([
    { id: 1, ism: "Asilbek Karimov", fayl: null, natija: true },
    { id: 2, ism: "Azamat Shomaqsudov", fayl: null, natija: true },
    { id: 3, ism: "Navruzbek Murodullayev", fayl: null, natija: true },
    { id: 4, ism: "Shag'zoda Mirhanova", fayl: null, natija: true },
    { id: 5, ism: "Shahriyor Shaylavov", fayl: null, natija: true },
    { id: 6, ism: "Yahyo Tojiboyev", fayl: null, natija: true },
  ]);

  // Faylni yuklash
  const faylniYuklash = (talabaId, fayl) => {
    setTalabalar(talabalar.map(talaba => 
      talaba.id === talabaId ? { ...talaba, fayl: fayl } : talaba
    ));
  };

  // Natijani o'zgartirish
  const natijaniOzgartirish = (talabaId) => {
    setTalabalar(talabalar.map(talaba => 
      talaba.id === talabaId ? { ...talaba, natija: !talaba.natija } : talaba
    ));
  };

  return (
   <>
    <Navbar></Navbar>
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">F1-1779</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative">
            <select
              value={tanlanganRaqam}
              onChange={(e) => setTanlanganRaqam(e.target.value)}
              className="appearance-none bg-white border-2 border-indigo-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            >
              {[1, 2, 3, 4, 5].map(raqam => (
                <option key={raqam} value={raqam}>{raqam}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-indigo-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <input
              type="date"
              value={tanlanganSana}
              onChange={(e) => setTanlanganSana(e.target.value)}
              className="appearance-none bg-white border-2 border-indigo-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
            <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-indigo-400 pointer-events-none" />
          </div>
          
          <button className="bg-indigo-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
            Tasdiqlash
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-indigo-50 border-b border-indigo-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-indigo-600">Talaba ismi</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-indigo-600">Imtihon fayllari</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-indigo-600">Natija</th>
              </tr>
            </thead>
            <tbody>
              {talabalar.map((talaba, index) => (
                <tr key={talaba.id} className={index % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}>
                  <td className="py-3 px-4 text-sm text-gray-800">{talaba.ism}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => faylniYuklash(talaba.id, e.target.files[0])}
                        />
                        <div className="flex items-center space-x-1 text-indigo-500 hover:text-indigo-600 transition duration-150 ease-in-out">
                          <FileIcon className="h-5 w-5" />
                          <span className="text-sm">{talaba.fayl ? talaba.fayl.name : 'Yuklash'}</span>
                        </div>
                      </label>
                      {talaba.fayl && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => natijaniOzgartirish(talaba.id)}
                      className={`p-1 rounded-full transition duration-150 ease-in-out ${
                        talaba.natija
                          ? 'bg-green-100 text-green-500 hover:bg-green-200'
                          : 'bg-red-100 text-red-500 hover:bg-red-200'
                      }`}
                    >
                      {talaba.natija ? (
                        <CheckCircleIcon className="h-5 w-5" />
                      ) : (
                        <XCircleIcon className="h-5 w-5" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </>
  );
}
