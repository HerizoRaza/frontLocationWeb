export type VehicleStatus = 'en_location' | 'disponible' | 'maintenance' | 'retard' | 'retour_prevu';

export interface Vehicle {
  id: string;
  immatriculation: string;
  modele: string;
  marque: string;
  annee: number;
  km: number;
  status: VehicleStatus;
  client?: string;
  dateDepart?: string;
  dateRetourPrevue?: string;
  tarifJour: number;
  carburant: 'essence' | 'diesel' | 'electrique' | 'hybride';
}

export interface Alert {
  id: string;
  vehicleId: string;
  immatriculation: string;
  type: 'retard' | 'maintenance' | 'controle_technique' | 'info';
  message: string;
  time: string;
  severity: 'danger' | 'warning' | 'info';
}

export interface RevenueWeek {
  semaine: string;
  montant: number;
  isCurrentWeek?: boolean;
}

export interface ModelStats {
  modele: string;
  count: number;
  maxCount: number;
}

export interface KPI {
  label: string;
  value: string;
  sub: string;
  trend: 'up' | 'down' | 'neutral';
}
