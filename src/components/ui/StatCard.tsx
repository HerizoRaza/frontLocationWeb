import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export type StockData = {
  name: string;
  subtitle: string;
  price: string;
  change: number;
  logo: React.ReactNode;
  logoColor: string;
};

type StatCardProps = {
  data: StockData;
};

export default function StatCard({ data }: StatCardProps) {
  const isPositive = data.change >= 0;

  return (
    <div className="bg-(--color-dark) rounded-2xl p-5 flex flex-col gap-4 min-w-55 flex-1 border-b border-(--color-primary) hover:border hover:border-(--color-primary) transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
          style={{ backgroundColor: data.logoColor }}
        >
          {data.logo}
        </div>
        <div className="overflow-hidden">
          <p className="text-white font-semibold text-sm truncate">{data.name}</p>
          <p className="text-gray-500 text-xs truncate">{data.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white text-xl font-bold">
          {data.price}
        </span>

      </div>
      <div className="flex items-center justify-between">
        <span
          className={`flex items-center gap-0.5 text-sm font-semibold px-2 py-0.5 rounded-md ${isPositive
              ? "text-emerald-400 bg-emerald-400/10"
              : "text-red-400 bg-red-400/10"
            }`}
        >
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          {Math.abs(data.change).toFixed(2)}%
        </span>
      </div>

    </div>
  );
}