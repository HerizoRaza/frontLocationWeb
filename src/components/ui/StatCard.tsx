type StatCardProps = {
  // Usage Authentification
  value?: number;
  label?: string;
  icon?: React.ReactNode;
  color?: string;
  // Usage Dashboard
  children?: React.ReactNode;
};

export default function StatCard({ value, label, icon, color = "#598af9", children }: StatCardProps) {
  return (
    <div className="bg-(--color-dark) rounded-2xl p-5 flex flex-col gap-4 min-w-55 flex-1 border-b border-(--color-primary) hover:border hover:border-(--color-primary) transition-colors duration-200">
      {children ? (
        // Rendu Dashboard
        children
      ) : (
        // Rendu Authentification
        <>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${color}20` }}
            >
              {icon}
            </div>
            <p className="text-gray-400 text-sm">{label}</p>
          </div>
          <span className="text-white text-xl font-bold">{value}</span>
        </>
      )}
    </div>
  );
}