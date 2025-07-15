export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}
