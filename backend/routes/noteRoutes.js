import express from 'express'
import { addnote, deletOneData, getdata, putOneData } from '../controllers/noteController.js'
import auth from '../middleware/auth.js'
const noteRoute = express.Router()

noteRoute.get('/',auth, getdata)
noteRoute.post('/',auth, addnote)
noteRoute.put('/:id',auth, putOneData)
noteRoute.delete('/:id',auth, deletOneData)

export default noteRoute