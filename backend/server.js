import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      content: "This is first joke",
    },
    {
      id: 2,
      title: "sec joke",
      content: "This is sec joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
