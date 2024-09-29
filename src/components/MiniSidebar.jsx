import React, { useState } from 'react'
import { ChevronLeft, Coins, FileText, Book, Users, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const menuItems = [
  { icon: FileText, label: 'Проекты', path: '/projects' }, // Adjust the path
  { icon: Book, label: 'Методология', path: '/dashboard/methodology' },
  { icon: MessageSquare, label: 'Экзамен', path: '/dashboard/exam' },
]


export default function MiniSidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <ChevronLeft className="w-6 h-6" />
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}> {/* Wrap button in Link for navigation */}
                <button
                  className={`w-full flex items-center p-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors ${
                    activeItem === index ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => setActiveItem(index)}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onFocus={() => setHoveredItem(index)}
                  onBlur={() => setHoveredItem(null)}
                >
                  <item.icon 
                    className={`w-6 h-6 ${
                      hoveredItem === index || activeItem === index ? 'text-red-500' : 'text-white'
                    }`} 
                  />
                  {isExpanded && (
                    <span className="ml-4 transition-opacity duration-300">
                      {item.label}
                    </span>
                  )}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
