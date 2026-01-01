import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthCtx } from "./AuthProvider";
import DarkModeToggle from "./DarkModeToggle"; // ✅ toggle button import

export default function App() {
  const { user, logout } = useContext(AuthCtx);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "relative px-3 py-2 rounded font-semibold shadow-sm transition text-white after:content-[''] after:block after:h-0.5 after:bg-yellow-300 after:scale-x-100 after:transition after:duration-300"
      : "relative px-3 py-2 rounded hover:text-yellow-300 transition after:content-[''] after:block after:h-0.5 after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between p-4 bg-blue-600 text-white shadow-md dark:bg-gray-900">
        {/* Left side links */}
        <div className="flex gap-10 flex-wrap">
          <NavLink to="/" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/stock" className={navLinkClass}>
            Stock
          </NavLink>
          {!user && (
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          )}
          {!user && (
            <NavLink to="/signup" className={navLinkClass}>
              Signup
            </NavLink>
          )}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          {user && (
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
          <DarkModeToggle />
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg p-6 transition hover:shadow-xl">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-200 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
        © 2026 Inventory SaaS Demo • Built with React + TailwindCSS
      </footer>
    </div>
  );
}
