import express from "express"
import postRoute from "./routes/post.route.js";
// import postRoute from 
const app=express();
import authRoute from "./routes/auth.route.js"

app.use(express.json());
app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)

app.listen(8800, ()=>{
    console.log("server started at port 8800")
})

