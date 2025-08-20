import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import ModeToggle from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, SignUpButton, useUser, UserButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  // Login bo‘lganda email tekshirish
  useEffect(() => {
    if (user) {
      if (user.emailAddresses[0].emailAddress === "admin@gmail.com") {
        navigate("/admin"); // admin panel
      } else {
        navigate("/dashboard"); // oddiy foydalanuvchi
      }
    }
  }, [user]);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Grad</h1>

          {/* Desktop nav links */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gray-200 dark:hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full">
                  LogIn
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full">
                  SignUp
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-900 transition-colors duration-300">
          <ul className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:bg-blue-800 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="p-4 border-t border-blue-600 dark:border-gray-700 flex flex-col gap-3">
            <ModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full w-full">
                  LogIn
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full w-full">
                  SignUp
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
