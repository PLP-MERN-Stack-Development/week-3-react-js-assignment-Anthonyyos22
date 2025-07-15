import { useState, useEffect } from "react";
import Card from "./Card";
import { fetchPosts } from "../api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">API Posts</h2>

      <input
        className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder="Search posts..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {loading && <p className="dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-500 dark:text-red-400">{error}</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, 10).map((post) => (
          <Card key={post.id} title={post.title}>
            <p className="dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}