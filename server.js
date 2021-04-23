import express from "express";

// connecting to the database
import "./config/dbConnect";

// importing routes
import postRoutes from "./routers/postRoutes";

const app = express();
app.use(express.json());

app.use("/posts", postRoutes);

app.listen(4000, () => console.log("Server up and running"));
