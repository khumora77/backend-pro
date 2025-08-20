import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto transition-colors duration-300  dark:bg-black">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100"
      >
        About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 dark:text-gray-300 text-lg mb-6 text-center"
      >
        We are a modern learning center providing high-quality courses
        and training programs. Our goal is to prepare students for real-world
        challenges with practical skills and knowledge.
      </motion.p>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow rounded-2xl p-6 text-center bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">2500+</h2>
          <p className="text-gray-600 dark:text-gray-300">Successful Graduates</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow rounded-2xl p-6 text-center bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">95%</h2>
          <p className="text-gray-600 dark:text-gray-300">Employment Rate</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="shadow rounded-2xl p-6 text-center bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">25+</h2>
          <p className="text-gray-600 dark:text-gray-300">Professional Courses</p>
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100"
      >
        Meet Our Team
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Mr. Ali", role: "Math Instructor" },
          { name: "Ms. Sara", role: "English Instructor" },
          { name: "John Doe", role: "Frontend Mentor" },
        ].map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center transition-colors duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
