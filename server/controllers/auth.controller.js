import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
    //db operations
    const { username, email, password } = req.body;
    try {

        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        //create a new user and save it to the database
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        })
        console.log(newUser);

        res.status(201).json({ message: "User created successfully" })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user!" })
    }
}

export const login = async (req, res) => {

    const { username, password } = req.body;

    try {


        // CHECK IF THE USER EXISTS

        const user = await prisma.user.findUnique({
            where: { username }
        })

        if (!user) return res.status(401).json({ message: "Invalid Credentials!" })
        // CHECK IF THE PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials!" });
        // GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );
        const { password: userPassword, ...userInfo } = user
        res.cookie("token", token, {
            httpOnly: true,
            // secure:true
            maxAge: age,
        }).status(200).json(userInfo)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }

}

export const logout = (req, res) => {
    //db operations
    res.clearCookie("token").status(200).json({ message: "Login Successful" });
}



// right now we can restrict our user request to do this, after the login process, we are gonna store the user info inside a cookie and make a request and send this request to the api and inside the api we will decrypt this cookie and check the user info and using that info we can intercept our request

// so basically we are gonna have some protected routes and some of those routes will be protected, to do that we are gonna use middleware