import Layout from "./components/Layout";
import Button from "./components/Button";
import Card from "./components/Card";

export default function App() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Welcome to MySite!</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Card 1">
          <p>This is a reusable card component.</p>
          <Button variant="primary">Primary Action</Button>
        </Card>

        <Card title="Card 2">
          <p>Same Card, different content.</p>
          <Button variant="secondary">Secondary Action</Button>
        </Card>

        <Card title="Danger Example">
          <p>Be careful with dangerous actions!</p>
          <Button variant="danger">Delete</Button>
        </Card>
      </div>
    </Layout>
  );
}
