import React from 'react';
import type { Alert } from '../../types';

interface AlertsPanelProps {
  alerts: Alert[];
}

const icons: Record<string, string> = {
  danger: '⚠',
  warning: '🔧',
  info: 'ℹ',
};

const bgColors: Record<string, string> = {
  danger: 'bg-red-500/20 border-red-500/30',
  warning: 'bg-amber-500/20 border-amber-500/30',
  info: 'bg-blue-500/20 border-blue-500/30',
};

const iconColors: Record<string, string> = {
  danger: 'bg-red-500/30 text-red-300',
  warning: 'bg-amber-500/30 text-amber-300',
  info: 'bg-blue-500/30 text-blue-300',
};

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ alerts }) => {
  return (
    <div className="bg-(--color-dark) border-b border-(--color-primary) hover:border hover:border-(--color-primary) rounded-2xl p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-200">Alertes & notifications</h3>
        <span className="bg-red-500/20 text-red-300 text-xs font-bold px-2 py-0.5 rounded-full border border-red-500/30">
          {alerts.length} actives
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {alerts.map(alert => (
          <div
            key={alert.id}
            className={`flex items-center gap-3 p-3 rounded-xl border ${bgColors[alert.severity]} transition-all duration-200 hover:scale-[1.01] cursor-default`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${iconColors[alert.severity]}`}>
              {icons[alert.severity]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-200 leading-snug">
                <span className="font-semibold">{alert.immatriculation}</span> — {alert.message}
              </p>
            </div>
            <span className="text-[10px] text-slate-500 shrink-0">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
