import { Button } from "@/components/ui/button";
import Courses from "./course";
import About from "./about";
import Contact from "./contact";

const Home = () => {
  return (
    <>
    <section className="bg-gray-50 dark:bg-black min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
    
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome to <span className="text-blue-600">Our Learning Center</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We provide high-quality courses designed to help you gain new skills,
            build your career, and achieve your goals.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore Courses
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Us
            </Button>
          </div>
        </div>

  
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1584697964154-d5c7b6e6b0a6?auto=format&fit=crop&w=800&q=80"
            alt="Learning"
            className="rounded-2xl shadow-lg"
            />
        </div>
      </div>
    </section>
    <Courses/>
    <About/>
    <Contact/>
            </>
  );
};

export default Home;
