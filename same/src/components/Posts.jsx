import { useState, useEffect } from "react";
import Card from "./Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setError("Failed to load posts"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">API Posts</h2>

      <input
        className="w-full mb-4 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        placeholder="Search posts..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.slice(0, 10).map((post) => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
