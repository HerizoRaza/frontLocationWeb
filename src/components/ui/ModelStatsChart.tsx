import React from 'react';
import type { ModelStats } from '../../types';

interface ModelStatsChartProps {
  data: ModelStats[];
}

export const ModelStatsChart: React.FC<ModelStatsChartProps> = ({ data }) => {
  return (
    <div className="bg-(--color-dark) border-b border-(--color-primary) hover:border hover:border-(--color-primary) rounded-2xl p-5 backdrop-blur-sm">
      <h3 className="text-sm font-semibold text-slate-200 mb-4">Modèles les plus loués</h3>
      <div className="flex flex-col gap-3">
        {data.map((item, i) => {
          const pct = Math.round((item.count / item.maxCount) * 100);
          const opacity = 1 - i * 0.15;
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-slate-400 w-32 shrink-0 truncate">{item.modele}</span>
              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: `rgba(59,130,246,${opacity})`,
                  }}
                />
              </div>
              <span className="text-xs font-medium text-slate-300 w-12 text-right">{item.count} loc.</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
