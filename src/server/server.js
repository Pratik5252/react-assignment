import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
const bcrypt = require("bcryptjs");

import problems from "../data/promblems.json" assert { type: "json" };

app.use(cors());

const USERS = [];

// app.use(bodyParser.json());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));

app.post("/signup",async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password,10);
  const user = { email, password: hashedPassword };

  const userExist = USERS.some((user) => user.email == email);

  if (!userExist) {
    USERS.push({ email, password });
    res.status(200).json({ message: "User created successfully" });
    console.log("Signup Succssfull");
  } else {
    res.status(400).json({ error: "User with this email already exists" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = USERS.some(
    (user) => user.email == email && user.password == password
  );

  const token = Math.random().toString(36).substring(2);
  const
  if (user) {
    res.status(200).json({ token });
  } else {
    res.status(400).json({ error: "Invalid email or password" });
  }
});

app.get("/problems", (req, res) => {
  res.status(200).json(problems);
});
app.get("/problems/:problem_slug", (req, res) => {
  const problem_slug = req.params.problem_slug;
  const problem = problems.find((p) => p.index === problem_slug);
  if (problem) {
    res.json(problem);
  } else {
    res.status(404).json({ error: "Problem not found" });
  }
});

// app.get("/submissions", (req, res) => {
//   res.status(200).send(SUBMISSIONS);
//   res.send("Hello from route4");
// });

// app.post("/submissions", (req, res) => {
//   const { problem, solution } = req.body;
//   const submission = { problem, solution, accepted: Math.random() < 0.5 };
//   SUBMISSIONS.push(submission);

//   res.send(
//     `Submission received! Your solution was ${
//       submission.accepted ? "accepted" : "rejected"
//     }`
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
