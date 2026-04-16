import { LayoutDashboard, Users, Settings, BarChart3, LogOut } from 'lucide-react'

// On définit les liens de navigation dans une constante (bonne pratique)
// → Facile à modifier sans toucher au JSX
const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Users,           label: 'Utilisateurs', href: '#' },
  { icon: BarChart3,       label: 'Statistiques', href: '#' },
  { icon: Settings,        label: 'Paramètres', href: '#' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-(--color-dark) flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6  bg-(--color-dark)">
        <span className="text-white font-bold text-xl">⚡ AdminPro</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 
                       hover:text-white hover:border-l border-gray-500 hover:bg-(--color-primary) transition-colors duration-400"
          >
            <item.icon size={18} />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* Bouton déconnexion en bas */}
      <div className="px-4 py-4 border-t border-(--color-primary)">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg 
                           text-gray-400 hover:text-red-400 hover:bg-gray-800 hover:border-b border-(--color-primary)
                           transition-colors duration-200">
          <LogOut size={18} />
          <span className="text-sm font-medium">Déconnexion</span>
        </button>
      </div>

    </aside>
  )
}