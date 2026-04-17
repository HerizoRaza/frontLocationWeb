import React from 'react';
import type { VehicleStatus } from '../../types';

interface StatusBadgeProps {
  status: VehicleStatus;
}

const config: Record<VehicleStatus, { label: string; className: string }> = {
  en_location: {
    label: 'En location',
    className: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  disponible: {
    label: 'Disponible',
    className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  },
  maintenance: {
    label: 'Maintenance',
    className: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  },
  retard: {
    label: 'Retard',
    className: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  },
  retour_prevu: {
    label: 'Retour prévu',
    className: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const { label, className } = config[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {label}
    </span>
  );
};
