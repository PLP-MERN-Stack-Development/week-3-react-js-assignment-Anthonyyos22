export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-6 text-center text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} My Vite App. All rights reserved.
        </p>
        <p>
          <a href="/tasks" className="text-blue-600 dark:text-blue-400 hover:underline">
            Tasks
          </a>
          <span className="mx-2">|</span>
          <a href="/posts" className="text-blue-600 dark:text-blue-400 hover:underline">
            Posts
          </a>
        </p>
      </div>
    </footer>
  );
}

