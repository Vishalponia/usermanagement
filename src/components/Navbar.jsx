import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <Link to="/" className="font-bold  text-yellow-500">User Management System</Link>
        <Link to="/create" className="bg-white text-blue-600 px-3 py-1 rounded">
          + Add User
        </Link>
      </div>
    </nav>
  );
}
