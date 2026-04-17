import { Bell, Menu, Search, User, MessageSquareMore } from 'lucide-react';

export default function Navbar() {

  return (
    <header className="h-16 bg-(--color-dark) border-b-2 border-(--color-primary) flex items-center justify-between px-6">
      <div className='flex items-center gap-4'>
        <button className="relative text-gray-400 hover:text-(--color-primary) transition-colors">
          <Menu size={30} />
        </button>

        <div className="flex items-left gap-2 bg-(--color-dark-2) hover:border border-(--color-primary) rounded-lg px-3 py-2 w-72">
          <Search className='text-gray-400' />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent text-sm text-white   placeholder-gray-500 outline-none w-full"
          />
        </div>
      </div>


      <div className="flex items-center gap-4">

        {/* Cloche notifications */}
        <button className="relative text-gray-400 hover:text-(--color-primary) transition-colors">
          <MessageSquareMore size={20} />
          {/* Badge rouge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 
                           rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        <button className="relative text-gray-400 hover:text-(--color-primary) transition-colors">
          <Bell size={20} />
          {/* Badge rouge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 
                           rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>

        {/* Avatar utilisateur */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-(--color-primary-light) rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-sm text-gray-300 font-medium">Admin</span>
        </div>

      </div>
    </header>
  );
}