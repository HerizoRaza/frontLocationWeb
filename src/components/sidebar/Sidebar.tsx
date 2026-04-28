import { LayoutDashboard, Users, LogIn, Car, CreditCard, Settings, Handshake, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: LogIn, label: 'Authentification', href: '/authentification' },
  { icon: Users, label: 'Chauffeur', href: '/chauffeur' },
  { icon: Car, label: 'Voiture', href: '/voiture' },
  { icon: CreditCard, label: 'Paiement', href: '/paiement' },
  { icon: Handshake, label: 'Partenaire', href: '/partenaire' },
  { icon: Settings, label: 'Paramètres', href: '/parametres' },
];

type Props = {
  isOpen: boolean;
};

export default function Sidebar({ isOpen }: Props) {
  return (
    <aside
      className={`
        shrink-0 h-screen z-30
        bg-(--color-dark)
        border-r-2 border-(--color-primary)
        transition-[width] duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-16'}
        flex flex-col overflow-visible
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center px-3 shrink-0 overflow-hidden">
        {isOpen ? (
          <span className="text-white font-bold text-xl whitespace-nowrap">⚡TSINJOLAVITRA</span>
        ) : (
          <span className="text-white font-bold text-xl">⚡</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-6 space-y-1">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <NavLink
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-colors duration-200
                ${!isOpen ? 'justify-center' : ''}
                ${isActive
                  ? 'bg-(--color-primary) text-white'
                  : 'text-gray-400 hover:text-white hover:bg-(--color-primary)'}
              `}
            >
              <item.icon size={18} className="shrink-0" />
              {isOpen && (
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              )}
            </NavLink>

            {/* Tooltip — visible uniquement quand sidebar fermée */}
            {!isOpen && (
              <div className="
                absolute left-full top-1/2 -translate-y-1/2 ml-3
                px-3 py-1.5 rounded-lg
                bg-gray-800 border border-gray-700
                text-white text-xs font-medium whitespace-nowrap
                shadow-lg
                opacity-0 group-hover:opacity-100
                pointer-events-none
                transition-opacity duration-150
                z-50
              ">
                {item.label}
                {/* Flèche gauche */}
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800" />
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Déconnexion */}
      <div className="px-2 py-4 border-t border-(--color-primary)">
        <div className="relative group">
          <button
            className={`
              w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
              text-gray-400 hover:text-red-400 hover:bg-gray-800
              transition-colors duration-200
              ${!isOpen ? 'justify-center' : ''}
            `}
          >
            <LogOut size={18} className="shrink-0" />
            {isOpen && (
              <span className="text-sm font-medium whitespace-nowrap">Déconnexion</span>
            )}
          </button>

          {/* Tooltip déconnexion */}
          {!isOpen && (
            <div className="
              absolute left-full top-1/2 -translate-y-1/2 ml-3
              px-3 py-1.5 rounded-lg
              bg-gray-800 border border-gray-700
              text-white text-xs font-medium whitespace-nowrap
              shadow-lg
              opacity-0 group-hover:opacity-100
              pointer-events-none
              transition-opacity duration-150
              z-50
            ">
              Déconnexion
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800" />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}