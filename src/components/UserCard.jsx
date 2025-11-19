import { Link } from "react-router-dom";

export default function UserCard({ user, deleteUser }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
      <p className="text-gray-600 mt-1">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/edit/${user.id}`}
          state={{ user }}
          className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition"
        >
          Edit
        </Link>

        <button
          onClick={() => deleteUser(user.id)}
          className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
