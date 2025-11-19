
// src/api/userApi.js

const STORAGE_KEY = "users_db";

// Get all users
export async function getUsers() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return data;
}

// Create new user
export async function createUser(user) {
  const users = await getUsers();
  user.id = Date.now().toString(); // unique ID
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return user;
}

// Get single user by ID
export async function getUserById(id) {
  const users = await getUsers();
  return users.find((u) => u.id === id);
}

// Update user
export async function updateUser(id, updatedData) {
  const users = await getUsers();
  const newUsers = users.map((u) =>
    u.id === id ? { ...u, ...updatedData } : u
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
  return true;
}

// Delete user
export async function deleteUser(id) {
  const users = await getUsers();
  const newUsers = users.filter((u) => u.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
  return true;
}
