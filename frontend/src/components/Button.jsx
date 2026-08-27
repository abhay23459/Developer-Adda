const variants = {
  primary: "bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/25 border border-orange-500/30",
  secondary: "bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300",
  gradient: "bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-500/20",
  outline: "bg-transparent hover:bg-orange-50 text-orange-600 border border-orange-300",
  ghost: "bg-transparent hover:bg-stone-100 text-stone-500 hover:text-stone-900"
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