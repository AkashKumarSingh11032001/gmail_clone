import express from "express";
import connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from "cors";


const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/', routes);

connection();

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
