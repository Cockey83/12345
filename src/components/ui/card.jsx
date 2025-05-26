export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl shadow-lg bg-white text-black ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
}