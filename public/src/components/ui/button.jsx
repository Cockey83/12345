export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-3xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
