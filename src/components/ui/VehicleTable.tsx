import React, { useState, useMemo } from 'react';
import type { Vehicle, VehicleStatus } from '../../types';
import { StatusBadge } from './StatusBadge';

interface VehicleTableProps {
  vehicles: Vehicle[];
}

const fuelLabel: Record<string, string> = {
  essence: '⛽ Essence',
  diesel: '🛢️ Diesel',
  electrique: '⚡ Électrique',
  hybride: '🌿 Hybride',
};

const statusFilters: { value: VehicleStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'en_location', label: 'En location' },
  { value: 'disponible', label: 'Disponible' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'retard', label: 'Retard' },
  { value: 'retour_prevu', label: 'Retour prévu' },
];

export const VehicleTable: React.FC<VehicleTableProps> = ({ vehicles }) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<VehicleStatus | 'all'>('all');
  const [sortKey, setSortKey] = useState<keyof Vehicle>('immatriculation');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    return vehicles
      .filter(v => {
        const matchSearch =
          v.immatriculation.toLowerCase().includes(search.toLowerCase()) ||
          v.marque.toLowerCase().includes(search.toLowerCase()) ||
          v.modele.toLowerCase().includes(search.toLowerCase()) ||
          (v.client?.toLowerCase().includes(search.toLowerCase()) ?? false);
        const matchStatus = statusFilter === 'all' || v.status === statusFilter;
        return matchSearch && matchStatus;
      })
      .sort((a, b) => {
        const av = a[sortKey] ?? '';
        const bv = b[sortKey] ?? '';
        if (av < bv) return sortDir === 'asc' ? -1 : 1;
        if (av > bv) return sortDir === 'asc' ? 1 : -1;
        return 0;
      });
  }, [vehicles, search, statusFilter, sortKey, sortDir]);

  const handleSort = (key: keyof Vehicle) => {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const SortIcon = ({ col }: { col: keyof Vehicle }) =>
    sortKey === col ? (
      <span className="ml-1 text-blue-400">{sortDir === 'asc' ? '↑' : '↓'}</span>
    ) : (
      <span className="ml-1 text-slate-600">↕</span>
    );

  return (
    <div className="bg-(--color-dark) border-b border-(--color-primary) hover:border hover:border-(--color-primary) rounded-2xl p-5 backdrop-blur-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <h3 className="text-sm font-semibold text-slate-200 flex-1">Véhicules — vue détaillée</h3>
        <div className="flex gap-2 flex-wrap">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs">🔍</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="pl-7 pr-3 py-1.5 text-xs bg-slate-700/60 border border-slate-600/60 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/70 w-44"
            />
          </div>
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as VehicleStatus | 'all')}
            className="px-3 py-1.5 text-xs bg-slate-700/60 border border-slate-600/60 rounded-lg text-slate-200 focus:outline-none focus:border-blue-500/70"
          >
            {statusFilters.map(f => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-700/60">
              {(
                [
                  { key: 'immatriculation', label: 'Immatriculation' },
                  { key: 'marque', label: 'Modèle' },
                  { key: 'client', label: 'Client' },
                  { key: 'dateDepart', label: 'Départ' },
                  { key: 'dateRetourPrevue', label: 'Retour prévu' },
                  { key: 'km', label: 'Km' },
                  { key: 'carburant', label: 'Carburant' },
                  { key: 'status', label: 'Statut' },
                ] as { key: keyof Vehicle; label: string }[]
              ).map(col => (
                <th
                  key={col.key}
                  className="text-left pb-3 pr-4 text-slate-400 font-medium uppercase tracking-wider text-[10px] cursor-pointer hover:text-slate-200 transition-colors select-none whitespace-nowrap"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}
                  <SortIcon col={col.key} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-500">
                  Aucun véhicule trouvé
                </td>
              </tr>
            ) : (
              filtered.map(v => (
                <tr
                  key={v.id}
                  className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors"
                >
                  <td className="py-3 pr-4 font-mono font-semibold text-slate-200 whitespace-nowrap">{v.immatriculation}</td>
                  <td className="py-3 pr-4 text-slate-300 whitespace-nowrap">
                    {v.marque} {v.modele}
                    <span className="ml-1 text-slate-500">{v.annee}</span>
                  </td>
                  <td className="py-3 pr-4 text-slate-300">{v.client ?? <span className="text-slate-600">—</span>}</td>
                  <td className="py-3 pr-4 text-slate-400 whitespace-nowrap">
                    {v.dateDepart
                      ? new Date(v.dateDepart).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
                      : <span className="text-slate-600">—</span>}
                  </td>
                  <td className={`py-3 pr-4 whitespace-nowrap ${v.status === 'retard' ? 'text-red-400 font-semibold' : 'text-slate-400'}`}>
                    {v.dateRetourPrevue
                      ? <>
                          {new Date(v.dateRetourPrevue).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                          {v.status === 'retard' && ' ⚠'}
                        </>
                      : <span className="text-slate-600">—</span>}
                  </td>
                  <td className="py-3 pr-4 text-slate-400 whitespace-nowrap">{v.km.toLocaleString('fr-FR')} km</td>
                  <td className="py-3 pr-4 text-slate-400 whitespace-nowrap">{fuelLabel[v.carburant]}</td>
                  <td className="py-3">
                    <StatusBadge status={v.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-slate-700/30 flex items-center justify-between text-[10px] text-slate-500">
        <span>{filtered.length} résultat{filtered.length > 1 ? 's' : ''} sur {vehicles.length} véhicules</span>
        <span>Dernière mise à jour : aujourd'hui 08:42</span>
      </div>
    </div>
  );
};
