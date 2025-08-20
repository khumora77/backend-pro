import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/slice/sliceCouse";
import type { RootState, AppDispatch } from "../store";

export default function Courses() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.courses
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-gray-800 dark:text-gray-200 text-center mt-8">Loading...</p>
    );
  if (error)
    return (
      <p className="text-red-500 text-center mt-8">{error}</p>
    );

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Courses
      </h1>
      <ul className="space-y-4">
        {items.map((course) => (
          <li
            key={course.id}
            className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {course.title}
            </span>{" "}
            -{" "}
            <span className="text-gray-700 dark:text-gray-300">
              {course.teacher}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
