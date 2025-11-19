// src/pages/EditUser.jsx
import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api/userApi";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    (async () => {
      const data = await getUserById(id);
      if (data) setForm(data);
    })();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, form);
    nav("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold">Edit User</h2>

        <input
          className="w-full p-3 border rounded-lg"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 border rounded-lg"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full p-3 border rounded-lg"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="w-full p-3 bg-green-600 text-white rounded-xl">
          Update
        </button>
      </form>
    </div>
  );
}
