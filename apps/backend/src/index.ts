import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {Collection, Document, MongoClient} from "mongodb";

// TODO use postgres


dotenv.config();

const PORT = 3000;
const app = express();

let db;
let typeText: Collection<Document>;

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URL!);

app.listen(PORT, async () => {
  // init db connection
  await client.connect();
  db = client.db("fishType");
  typeText = db.collection("typeText");
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/api", async (req, res) => {
  return res.status(200).json(
    await typeText.find({ done: false }).sort({ _id: 1 }).toArray()
  );
});

app.put("/api", async (req, res) => {
  console.log(req);
  await typeText.updateOne(
    { _id: req.body._id },
    { $set: req.body }
  );
  return res.status(200).send();
});
