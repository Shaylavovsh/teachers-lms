const Sidebar = () => {
  return (
    <aside className="bg-white p-4 border-r border-gray-200 h-screen">
      <div className="text-orange-500 text-lg font-bold mb-4">Front-001</div>
      <div className="font-semibold text-gray-700 mb-2">Проекты</div>
      <ul className="space-y-2 text-gray-600">
        {Array.from({ length: 6 }).map((_, idx) => (
          <li key={idx} className="cursor-pointer">
            <span>1. Front-Endga kirish</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
