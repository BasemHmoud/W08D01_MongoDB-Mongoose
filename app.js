const express=require("express")

const app = express()

const port =5000

const db=require("./db")


app.listen(port, () => {
    console.log(`server run on port ${port}`);
  });
  