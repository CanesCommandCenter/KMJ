export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
