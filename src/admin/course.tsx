import { useEffect, useState } from "react";
import axios from "axios";

interface Course { id: number; title: string; teacher: string; }

export default function AdminCourse() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    axios.get("http://localhost:3000/courses")
      .then(res => setCourses(res.data))
      .catch(console.error);
  }, []);

  const addCourse = () => {
    if(!title || !teacher) return alert("To‘ldiring!");
    axios.post("http://localhost:3000/courses/admin", { title, teacher })
      .then(res => setCourses([...courses, res.data]))
      .catch(console.error);
    setTitle(""); setTeacher("");
  };

  const updateCourse = () => {
    if(!editingId) return;
    axios.put(`http://localhost:3000/courses/admin/${editingId}`, { title, teacher })
      .then(res => {
        setCourses(courses.map(c => c.id === editingId ? res.data : c));
        setEditingId(null); setTitle(""); setTeacher("");
      })
      .catch(console.error);
  };

  const deleteCourse = (id:number) => {
    axios.delete(`http://localhost:3000/courses/admin/${id}`)
      .then(()=> setCourses(courses.filter(c => c.id!==id)))
      .catch(console.error);
  };

  return (
    <>
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Courses Admin
      </h1>

      <div className="mb-6 flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
        />
        <input
          type="text"
          placeholder="Teacher"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          className="border rounded px-3 py-2 flex-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
        />
        {editingId ? (
          <button
            onClick={updateCourse}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={addCourse}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        )}
      </div>

      <ul className="space-y-3">
        {courses.map((course) => (
          <li
            key={course.id}
            className="flex justify-between items-center border p-3 rounded bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors"
          >
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{course.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{course.teacher}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { setEditingId(course.id); setTitle(course.title); setTeacher(course.teacher); }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(course.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

    </>

  );
}
