import type{ Vehicle,Alert,  RevenueWeek, ModelStats } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    immatriculation: 'AB-124-CD',
    modele: '208',
    marque: 'Peugeot',
    annee: 2022,
    km: 45230,
    status: 'retard',
    client: 'M. Rakoto',
    dateDepart: '2026-04-10',
    dateRetourPrevue: '2026-04-13',
    tarifJour: 45,
    carburant: 'essence',
  },
  {
    id: '2',
    immatriculation: 'EF-321-GH',
    modele: 'Clio',
    marque: 'Renault',
    annee: 2023,
    km: 38410,
    status: 'retour_prevu',
    client: 'Mme Rabe',
    dateDepart: '2026-04-15',
    dateRetourPrevue: '2026-04-17',
    tarifJour: 42,
    carburant: 'hybride',
  },
  {
    id: '3',
    immatriculation: 'GH-780-IJ',
    modele: 'Sandero',
    marque: 'Dacia',
    annee: 2021,
    km: 79900,
    status: 'maintenance',
    tarifJour: 35,
    carburant: 'essence',
  }
];

export const alerts: Alert[] = [
  {
    id: 'a1',
    vehicleId: '1',
    immatriculation: 'AB-124-CD',
    type: 'retard',
    message: 'Retour dépassé de 2 jours',
    time: 'Il y a 2j',
    severity: 'danger',
  },
  {
    id: 'a2',
    vehicleId: '3',
    immatriculation: 'GH-780-IJ',
    type: 'maintenance',
    message: 'Révision à 80 000 km due',
    time: 'Il y a 5h',
    severity: 'warning',
  },
  {
    id: 'a3',
    vehicleId: '3',
    immatriculation: 'KL-455-MN',
    type: 'controle_technique',
    message: 'Contrôle technique expiré',
    time: "Aujourd'hui",
    severity: 'warning',
  },
  {
    id: 'a4',
    vehicleId: '2',
    immatriculation: 'EF-321-GH',
    type: 'info',
    message: 'Retour prévu ce soir à 18h',
    time: "Aujourd'hui",
    severity: 'info',
  },
];

export const revenueData: RevenueWeek[] = [
  { semaine: 'S11', montant: 2500 },
  { semaine: 'S12', montant: 3020 },
  { semaine: 'S13', montant: 2300 },
  { semaine: 'S14', montant: 3450 },
  { semaine: 'S15', montant: 3840 },
  { semaine: 'S16', montant: 4820, isCurrentWeek: true },
];

export const modelStats: ModelStats[] = [
  { modele: 'Peugeot 208', count: 22, maxCount: 22 },
  { modele: 'Renault Clio', count: 18, maxCount: 22 },
  { modele: 'Dacia Sandero', count: 14, maxCount: 22 },
  { modele: 'Toyota Yaris', count: 11, maxCount: 22 },
  { modele: 'Volkswagen Golf', count: 7, maxCount: 22 },
];
