import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/admin")}
          >
            Admin Panel
          </h1>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/admin/courses"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Users
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-gray-800 transition-colors duration-300">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link
                to="/admin/courses"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="block p-2 hover:bg-gray-700 rounded transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
