import DataTable, { type Column } from "../components/ui/Datatable";


type Vehicule = {
  immat: string;
  modele: string;
  client: string;
  depart: string;
  retour: string;
  km: string;
  carburant: string;
  status: string;
};

const data: Vehicule[] = [
  {
    immat: "AB-124-CD",
    modele: "Peugeot 208 2022",
    client: "M. Rakoto",
    depart: "10 avr.",
    retour: "13 avr.",
    km: "45 230 km",
    carburant: "Essence",
    status: "Retard",
  },
];

export default function Vehicules() {
  const columns: Column<Vehicule>[] = [
    { header: "IMMATRICULATION", accessor: "immat" },
    { header: "MODÈLE", accessor: "modele" },
    { header: "CLIENT", accessor: "client" },
    { header: "DÉPART", accessor: "depart" },

    {
      header: "RETOUR PRÉVU",
      accessor: "retour",
      render: (row) => (
        <span className="text-red-400">{row.retour}</span>
      ),
    },

    { header: "KM", accessor: "km" },

    {
      header: "CARBURANT",
      accessor: "carburant",
    },

    {
      header: "STATUT",
      accessor: "status",
    },
  ];

  return (
    <div className="bg-(--color-dark) border border-[#3a2a1f] rounded-xl p-6">
      
      <h2 className="text-white font-semibold mb-4">
        Véhicules — vue détaillée
      </h2>

      <DataTable columns={columns} data={data} />

    </div>
  );
}