import React from 'react';
import type { Vehicle } from '../../types';

interface FleetDonutProps {
  vehicles: Vehicle[];
}

export const FleetDonut: React.FC<FleetDonutProps> = ({ vehicles }) => {
  const total = vehicles.length;
  const enLocation = vehicles.filter(v => v.status === 'en_location').length;
  const disponible = vehicles.filter(v => v.status === 'disponible').length;
  const maintenance = vehicles.filter(v => v.status === 'maintenance').length;
  const retard = vehicles.filter(v => v.status === 'retard').length;
  const retourPrevu = vehicles.filter(v => v.status === 'retour_prevu').length;

  const segments = [
    { label: 'En location', count: enLocation, color: '#3B82F6' },
    { label: 'Disponible', count: disponible, color: '#10B981' },
    { label: 'Maintenance', count: maintenance, color: '#F59E0B' },
    { label: 'Retard', count: retard, color: '#EF4444' },
    { label: 'Retour prévu', count: retourPrevu, color: '#8B5CF6' },
  ];

  // Build SVG donut arcs
  const r = 46;
  const cx = 60;
  const cy = 60;
  const circumference = 2 * Math.PI * r;

  let cumulative = 0;
  const arcs = segments.map(seg => {
    const pct = total > 0 ? seg.count / total : 0;
    const dash = pct * circumference;
    const offset = -cumulative * circumference;
    cumulative += pct;
    return { ...seg, dash, offset };
  });

  return (
    <div className="bg-(--color-dark) border-b border-(--color-primary) hover:border hover:border-(--color-primary) rounded-2xl p-5 backdrop-blur-sm">
      <h3 className="text-sm font-semibold text-slate-200 mb-4">Statut de la flotte</h3>
      <div className="flex items-center gap-5">
        <div className="relative shrink-0">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1e293b" strokeWidth="14" />
            {arcs.map((arc, i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={arc.color}
                strokeWidth="14"
                strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
                strokeDashoffset={arc.offset}
                strokeLinecap="round"
                style={{ transform: 'rotate(-90deg)', transformOrigin: `${cx}px ${cy}px` }}
              />
            ))}
            <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="18" fontWeight="700">
              {total}
            </text>
            <text x={cx} y={cy + 14} textAnchor="middle" fill="#94a3b8" fontSize="10">
              véhicules
            </text>
          </svg>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: seg.color }}
              />
              <span className="text-xs text-slate-400 flex-1">{seg.label}</span>
              <span className="text-xs font-semibold text-slate-200">{seg.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
