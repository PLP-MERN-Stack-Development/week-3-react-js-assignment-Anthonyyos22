export default function Button({
  children,
  variant = "primary",
  size = "base",
  className = "",
  ...props
}) {
  const base = "font-semibold rounded transition-colors";
  const sizes = {
    base: "px-4 py-2 text-base",
    sm: "px-3 py-1 text-sm",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
