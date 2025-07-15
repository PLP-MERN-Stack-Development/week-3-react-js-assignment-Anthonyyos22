export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Hello Vite + React + Tailwind  <span className="animate-pulse">✨</span>
      </h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        Welcome to this awesome starter template! 🎉
      </p>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        The tasks page shows you how to use React hooks to manage state and
        React Router to navigate between pages.
      </p>
      <p className="text-2xl text-gray-700 dark:text-gray-300">
        The posts page shows you how to use React hooks to fetch data from an
        API and React Router to navigate between pages.
      </p>
    </div>
  );
}

