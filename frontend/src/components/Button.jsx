const variants = {
  primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500/30",
  secondary: "bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800",
  gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-95 text-white shadow-lg shadow-indigo-500/20",
  outline: "bg-transparent hover:bg-slate-900 text-indigo-400 border border-indigo-500/30",
  ghost: "bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-white"
};

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-4 py-2 text-xs font-semibold rounded-xl gap-2",
  lg: "px-6 py-3 text-sm font-semibold rounded-xl gap-2.5"
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}