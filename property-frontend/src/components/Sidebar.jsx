import React from "react";
import { Link, useLocation } from "react-router-dom";
import { List, Home } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { name: "Master Dropdown", path: "/dropdowns", icon: <List size={18} /> },
    { name: "Manage Property", path: "/manage-property", icon: <Home size={18} /> },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white fixed top-16 left-0 h-[calc(100vh-4rem)] p-4">
      <ul>
        {links.map((link) => (
          <li key={link.path} className="mb-4">
            <Link
              to={link.path}
              className={`flex items-center gap-2 p-2 rounded ${
                location.pathname === link.path ? "bg-gray-700" : ""
              }`}
            >
              {link.icon} {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
