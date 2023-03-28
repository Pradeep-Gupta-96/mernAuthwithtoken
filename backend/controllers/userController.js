import User from '../models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECRET_KEY = "NOTESAPI"

export const signup  = async (req, res) => {
    const { username, email, password } = req.body
    try {
        if (!username || !email || !password) {
            return res.status(404).json({ message: "please fill all details" })
        } else {
            const userExit = await User.findOne({ email: email })
            if (userExit) {
                return res.status(400).json({ message: "user allready exist" })
            }
            const hashpassword = await bcrypt.hash(password, 10)
            const user = new User({
                username: username,
                email: email,
                password: hashpassword
            })
            await user.save()
            const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY)
            return res.status(201).json({ user: user, token: token })
        }
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const signin = async (req, res) => {
const {email,password}=req.body
try {
    if(!email || !password){
        return res.status(404).json({ message: "please fill all details" })
    }else{
        const userExit= await  User.findOne({email:email})
        if(!userExit){
            return res.status(404).json({ message: "User not found" })
        }
        const matchPassword=await bcrypt.compare(password,userExit.password)
        if(!matchPassword){
            return res.status(400).json({message:"invaild credentials"})
        }
        const token = jwt.sign({ email: userExit.email, id: userExit._id }, SECRET_KEY)
        return res.status(201).json({user: userExit, token: token, message:"Done" })
    }
} catch (error) {
    return res.status(500).json({ message: error })
}
}