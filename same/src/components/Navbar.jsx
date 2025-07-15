import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            React App
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Tasks
            </Link>
            <Link
              to="/posts"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Posts
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}