import express  from "express";
import cors from "cors";
import connectToDb from "./db-connect/mongoose.js";
import itemRouter from "./routes/itemstore.js";
const app = express();
const PORT =process.env.PORT || 7888;

await connectToDb();
app.use(cors());
app.use(express.json());
app.use('/item',itemRouter);
app.get('/',  (req, res)=> {
  res.send('item catalog');
})

app.listen(PORT,()=>{console.log("run api app")});
