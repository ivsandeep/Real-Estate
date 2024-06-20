import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
const app =express();


app.use(cors({origin:process.env.CLIENT_URL, credentials:true}));
app.use(express());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/test",testRoute);

// app.use("/api/test",(req,res)=>{
//     res.send("it works")
// })

// app.use("/api/test",(req,res)=>{
//     res.send("it works")
// })

// app.use("/api/test",(req,res)=>{
//     res.send("it works")
// })

// app.use("/api/auth/register",(req,res)=>{
//     res.send("it works")
// })

// app.use("/api/auth/login",(req,res)=>{
//     res.send("it works")
// })

// app.use("/api/auth/logout",(req,res)=>{
//     res.send("it works")
// })
// app.use("/api/posts",(req,res)=>{
//     res.send("it works")
// })
// app.use("/api/posts",(req,res)=>{
//     res.send("it works")
// })
// app.use("/api/posts/12312",(req,res)=>{
//     res.send("it works")
// })

















app.listen(8800, ()=>{
    console.log("server is running")
})





