import { Link } from "react-router-dom"; // Optional if using react-router

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-bold">MySite</div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
