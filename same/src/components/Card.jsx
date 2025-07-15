export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
