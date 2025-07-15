export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 px-6 py-4 text-center">
      <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
      </div>
    </footer>
  );
}
