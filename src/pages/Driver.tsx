import Button from "../components/ui/Button";
import StatCard from "../components/ui/StatCard";
import { vehicles } from "../data/mockData";
import {
  Users, CheckCircle2, AlertCircle, Shield,
} from 'lucide-react'
import { VehicleTable } from "../components/ui/VehicleTable";

export type StockData = {
  name: string;
  number: number;
  logo: React.ReactNode;
  logoColor: string;
};
const stats: StockData[] = [
  {
    name: "Utilisateurs",
    number: 10,
    logo: <Users />,
    logoColor: "#555555",
  },
  {
    name: "Actifs",
    number: 3,
    logo: <CheckCircle2 />,
    logoColor: "#34d399",
  },
  {
    name: "Rôles",
    number: 5,
    logo: <Shield />,
    logoColor: "#ff9900",
  },
  {
    name: "Inactif",
    number: 11,
    logo: <AlertCircle />,
    logoColor: "#f87171",
  },
];


export default function Chauffeur() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-2xl font-bold">Authentification</h1>
          <p className="text-muted-foreground text-sm">
            Gestion des accès et des utilisateurs
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center bg-(--color-primary) hover:bg-(--color-primary-light) gap-1.5 rounded-full px-3 py-1">
            <Button variant="primary" >Ajouter un utilisateur</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stock) => {

          return (
            <StatCard key={stock.name}>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                  // ✅ stock.logoColor au lieu de data.logoColor
                  style={{ backgroundColor: stock.logoColor }}
                >
                  {/* ✅ stock.logo au lieu de data.logo */}
                  {stock.logo}
                </div>
                <div className="overflow-hidden">
                  <p className="text-white font-semibold text-sm truncate">{stock.name}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white text-xl font-bold">
                  {stock.number}
                </span>
              </div>

            </StatCard>
          );
        })}
      </div>
      <div>
        <VehicleTable vehicles={vehicles} />
      </div>
    </div>
  );
}
