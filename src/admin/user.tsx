import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email_addresses: { email_address: string }[];
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Foydalanuvchilarni olish
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3000/users'); // backend endpoint
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Foydalanuvchini o'chirish
  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter(user => user.id !== id)); // ro'yxatdan o'chirish
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div>
      <h2>Users List</h2>
      {users.length === 0 && <p>No users found.</p>}
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex justify-between items-center my-2">
            <div>
              {user.first_name} {user.last_name} - {user.email_addresses[0]?.email_address}
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
