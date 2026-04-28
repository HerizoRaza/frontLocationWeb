import StatCard from "../components/ui/StatCard";
import { FleetDonut } from "../components/ui/FleetDonut";
import { RevenueChart } from "../components/ui/RevenueChart";
import { ModelStatsChart } from "../components/ui/ModelStatsChart";
import { AlertsPanel } from "../components/ui/AlertsPanel";
import { VehicleTable } from "../components/ui/VehicleTable";
import { Car, TrendingUp, CircleDollarSign, FileText } from "lucide-react";
import { vehicles, modelStats, alerts, revenueData } from "../data/mockData";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// ✅ Types définis avant leur utilisation
export type StockData = {
  name: string;
  subtitle: string;
  price: string;
  change: number;
  logo: React.ReactNode;
  logoColor: string;
};

const stocks: StockData[] = [
  {
    name: "Voitures disponibles",
    subtitle: "Apple, Inc",
    price: "1/3",
    change: 11.01,
    logo: <Car />,
    logoColor: "#555555",
  },
  {
    name: "Locations actives",
    subtitle: "Paypal, Inc",
    price: "1",
    change: -9.05,
    logo: <FileText />,
    logoColor: "#003087",
  },
  {
    name: "Revenu total",
    subtitle: "Tesla, Inc",
    price: "5 000Ar",
    change: 11.01,
    logo: <CircleDollarSign />,
    logoColor: "#e82127",
  },
  {
    name: "Paiements en attente",
    subtitle: "Amazon.com, Inc",
    price: "3 000Ar",
    change: 11.01,
    logo: <TrendingUp />,
    logoColor: "#ff9900",
  },
];

// ✅ Dashboard est une page — pas besoin de props
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-2xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground text-sm">
            Vue d'ensemble de votre activité de location de voitures
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-300">Opérationnel</span>
          </div>
          <span className="text-xs text-muted-foreground capitalize">
            {new Date().toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stocks.map((stock) => {
          // ✅ isPositive basé sur stock.change, pas data.change
          const isPositive = stock.change >= 0;

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
                  <p className="text-gray-500 text-xs truncate">{stock.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white text-xl font-bold">
                  {stock.price}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`flex items-center gap-0.5 text-sm font-semibold px-2 py-0.5 rounded-md ${isPositive
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-red-400 bg-red-400/10"
                    }`}
                >
                  {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {Math.abs(stock.change).toFixed(2)}%
                </span>
              </div>
            </StatCard>
          );
        })}
      </div>

      {/* Donut + Revenus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FleetDonut vehicles={vehicles} />
        <RevenueChart data={revenueData} />
      </div>

      {/* Modèles + Alertes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ModelStatsChart data={modelStats} />
        <AlertsPanel alerts={alerts} />
      </div>

      {/* Tableau véhicules */}
      <div>
        <VehicleTable vehicles={vehicles} />
      </div>

    </div>
  );
}