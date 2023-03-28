import express from 'express'
import { postexceldata, getexceldata } from '../controllers/excelController.js'
const excelRoute = express.Router()
import multer from 'multer'

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

excelRoute.get('/', getexceldata)
excelRoute.post('/', upload.single('file'), postexceldata)


export default excelRoute
