rrquire("dotenv").config();
const express=require("express");
const cors= require("cors");
const app=express();
const authRoute=require("");
const contactRoute=require("");
const contactRoute=require("");
const serviceRoute=require("");
const connectDb=require("");
const errorMiddleware=require("");


//lets tackle cors

const corsOptions={
    origin:"https://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use(errorMiddleware);

const PORT =5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        
    })
})