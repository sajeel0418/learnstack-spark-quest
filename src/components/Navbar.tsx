
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Search,
  Menu,
  X,
  User,
  Award,
  PlusCircle
} from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link 
            to="/"
            className="flex items-center space-x-2"
          >
            <BookOpen className="w-6 h-6 text-learnstack-600" />
            <span className="text-xl font-bold text-learnstack-900">LearnStack</span>
          </Link>

          {/* Search bar - visible on desktop */}
          <div className="hidden md:flex md:w-1/3 lg:w-1/2">
            <div className="relative w-full">
              <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                className="pl-9 w-full bg-gray-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link to="/ask">
              <Button variant="ghost" size="sm">
                <PlusCircle className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="ghost" size="sm">
                <Award className="w-4 h-4 mr-2" />
                Leaderboard
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="rounded-full">
                <User className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="default" size="sm" className="bg-learnstack-600 hover:bg-learnstack-700">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4 animate-fade-in">
            <div className="pt-2 pb-4">
              <div className="relative">
                <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search questions..."
                  className="pl-9 w-full bg-gray-50"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/ask">
                <Button variant="ghost" className="w-full justify-start">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Ask Question
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button variant="ghost" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Leaderboard
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button className="w-full bg-learnstack-600 hover:bg-learnstack-700">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
