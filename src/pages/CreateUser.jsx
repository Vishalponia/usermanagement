// src/pages/CreateUser.jsx
import { useState } from "react";
import { createUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    nav("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold">Create User</h2>

        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="w-full p-3 bg-blue-600 text-white rounded-xl">
          Create
        </button>
      </form>
    </div>
  );
}
