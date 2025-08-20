import AdminNavbar from '@/admin/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <AdminNavbar />


      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Admin Panel</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 shadow rounded transition-colors">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Users</h2>
            <p className="text-2xl font-bold mt-2">120</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 shadow rounded transition-colors">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Total Courses</h2>
            <p className="text-2xl font-bold mt-2">35</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 shadow rounded transition-colors">
            <h2 className="text-gray-500 dark:text-gray-400 text-sm">Active Sessions</h2>
            <p className="text-2xl font-bold mt-2">8</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white dark:bg-gray-800 p-4 shadow rounded transition-colors">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition">
              Add New User
            </button>
            <button className="bg-green-600 dark:bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600 transition">
              Add New Course
            </button>
            <button className="bg-red-600 dark:bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 dark:hover:bg-red-600 transition">
              View Reports
            </button>
          </div>
        </div>
      </div>
            <div className="p-4">
        <Outlet /> {/* Ichki route shu yerga render bo‘ladi */}
      </div>
    </div>
  )
}

export default AdminLayout
