import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export function CollapsibleSection({ title, sectionId, children, openSection, toggleSection }) {
  return (
    <section className="mb-4 rounded-lg bg-white p-4 shadow">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => toggleSection(sectionId)}
        aria-expanded={openSection === sectionId}
      >
        <h2 className="text-xl font-semibold text-orange-500">{title}</h2>
        {openSection === sectionId ? (
          <ChevronDown className="h-6 w-6 text-orange-500" />
        ) : (
          <ChevronRight className="h-6 w-6 text-orange-500" />
        )}
      </div>
      {openSection === sectionId && <div className="mt-4">{children}</div>}
    </section>
  );
}

export default function Component() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">Проекты</h2>
        <ul className="space-y-2">
          <li className="rounded-lg bg-orange-500 p-2 text-white">
            1. JavaScript Kirish <span className="ml-2 rounded-full bg-white px-2 text-xs text-orange-500">7</span>
          </li>
          <li className="p-2 text-gray-600">2. Data Types and Type convertion</li>
          <li className="p-2 text-gray-600">3. Arifmetik operatorlar & Math methodlari vs if else</li>
          <li className="p-2 text-gray-600">4. String metodlari</li>
          <li className="p-2 text-gray-600">5. Object</li>
          <li className="p-2 text-gray-600">6. Array</li>
          <li className="p-2 text-gray-600">7. For & While</li>
          <li className="p-2 text-gray-600">8. Array(davomi) & for of vs forEach</li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">F2-1703</h1>
          <button className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">Обновить</button>
        </header>

        <CollapsibleSection
          title="Methodology"
          sectionId="methodology"
          openSection={openSection}
          toggleSection={toggleSection}
        >
          <p>Methodology content goes here...</p>
        </CollapsibleSection>

        <CollapsibleSection
          title="Homework"
          sectionId="homework"
          openSection={openSection}
          toggleSection={toggleSection}
        >
          <h3 className="mb-2 text-lg font-semibold">JavaScript Kirish</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Student</th>
                <th className="border p-2 text-left">File</th>
                <th className="border p-2 text-left">Link</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Baho</th>
                <th className="border p-2 text-left">Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1. Bekir Seytumerov</td>
                <td className="border p-2">-</td>
                <td className="border p-2">Link</td>
                <td className="border p-2">checked</td>
                <td className="border p-2">-</td>
                <td className="border p-2">Vazifa bajarilmagan.</td>
              </tr>
              {/* Add more rows for other students */}
            </tbody>
          </table>
        </CollapsibleSection>
      </main>
    </div>
  );
}