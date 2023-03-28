import jwt from "jsonwebtoken";
const SECRET_KEY = "NOTESAPI"

const auth = async (req, res, next) => {
    try {
        let tokan = req.headers.authorization
        if (tokan) {
            tokan = tokan.split(" ")[1];
            let user = jwt.verify(tokan, SECRET_KEY)
            req.userId = user.id
        } else {
            return res.status(401).json({ message: "unauthorzid User" })
        }
        next();
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export default auth