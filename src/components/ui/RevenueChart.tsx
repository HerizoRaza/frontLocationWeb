import React from 'react';
import type { RevenueWeek } from '../../types';

interface RevenueChartProps {
  data: RevenueWeek[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const max = Math.max(...data.map(d => d.montant));

  return (
    <div className="bg-(--color-dark) border-b border-(--color-primary) hover:border hover:border-(--color-primary) rounded-2xl p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-200">Revenus — 6 dernières semaines</h3>
        <span className="text-xs font-bold text-emerald-400">+12% ↑</span>
      </div>
      <div className="flex items-end gap-1.5 h-20">
        {data.map((d, i) => {
          const pct = (d.montant / max) * 100;
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-1 flex-1 group cursor-default"
              title={`${d.semaine} · ${d.montant.toLocaleString('fr-FR')}€`}
            >
              <div className="relative w-full flex items-end" style={{ height: '64px' }}>
                <div
                  className={`w-full rounded-t-md transition-all duration-300 group-hover:opacity-80 ${
                    d.isCurrentWeek
                      ? 'bg-blue-500'
                      : 'bg-slate-600 group-hover:bg-slate-500'
                  }`}
                  style={{ height: `${pct}%` }}
                />
                {d.isCurrentWeek && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-blue-300 whitespace-nowrap">
                    {(d.montant / 1000).toFixed(1)}k€
                  </div>
                )}
              </div>
              <span
                className={`text-[10px] ${
                  d.isCurrentWeek ? 'text-blue-400 font-semibold' : 'text-slate-500'
                }`}
              >
                {d.semaine}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
