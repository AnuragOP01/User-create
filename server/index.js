import express from "express";
import connectDB from "./db.js";
import itemModel from "./models/Item.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.post("/register", async (req, res) => {
  itemModel
    .create(req.body)
    .then((register) => res.json(register))
    .catch((err) => res.json(err));
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  itemModel
  .findOne( { email: email } )
  .then(registers => {
        if(registers) {
             if(registers.password === password) {
                 res.json('Success')
             }
             else {
                 res.json('Password incorrect')
             } 
        }
        else { 
           res.json('unregistered user')
        }
  } )
});

app.get("/users", async (req, res) => {
  const data = await itemModel.find();
  try {
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, () => {
  console.log("App is running:");
});
