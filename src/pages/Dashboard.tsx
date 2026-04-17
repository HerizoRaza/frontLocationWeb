import StatCard from "../components/ui/StatCard";
import type { StockData } from "../components/ui/StatCard";
import { FleetDonut } from "../components/ui/FleetDonut";
import { RevenueChart } from "../components/ui/RevenueChart";
import { ModelStatsChart } from "../components/ui/ModelStatsChart";
import { AlertsPanel } from "../components/ui/AlertsPanel";
import { VehicleTable } from "../components/ui/VehicleTable";
import { Car, TrendingUp, CircleDollarSign, FileText } from "lucide-react";
import { vehicles, modelStats, alerts, revenueData } from "../data/mockData";

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

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4 py-6">

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
        {stocks.map((stock) => (
          <StatCard key={stock.name} data={stock} />
        ))}
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