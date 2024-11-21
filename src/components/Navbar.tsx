import { PawPrint, Search, MessageCircle, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PawMatch</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 flex items-center">
              <Search className="h-5 w-5 mr-1" />
              Browse
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 flex items-center">
              <MessageCircle className="h-5 w-5 mr-1" />
              Messages
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 flex items-center">
              <Bell className="h-5 w-5 mr-1" />
              Notifications
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 flex items-center">
              <User className="h-5 w-5 mr-1" />
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}