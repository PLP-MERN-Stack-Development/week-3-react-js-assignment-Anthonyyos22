import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TaskManager from "./components/TaskManager";
import Posts from "./components/Posts";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </Router>
  );
}