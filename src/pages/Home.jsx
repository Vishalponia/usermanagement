// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../api/userApi";

export default function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete user?")) return;
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Link
          to="/create"
          className="px-5 py-2 bg-blue-600 text-white rounded-xl"
        >
          + Create User
        </Link>
      </div>

      {users.length === 0 && (
        <p className="text-gray-600 text-lg">No users found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((u) => (
          <div key={u.id} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{u.name}</h2>
            <p>{u.email}</p>
            <p>{u.phone}</p>

            <div className="mt-4 flex gap-4">
              <Link
                to={`/edit/${u.id}`}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(u.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
