 
import Card from './Card';

export default function StatCard({ title, value, subtitle, icon: Icon, color = "indigo" }) {
  const colorStyles = {
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">{title}</span>
        {Icon && (
          <div className={`p-2 rounded-xl border ${colorStyles[color]}`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="text-2xl font-bold tracking-tight text-white mb-1">{value}</div>
      {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
    </Card>
  );
}