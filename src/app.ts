import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "DevOps Demo API",
    status: "running",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/api/users", (_req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
