import express from 'express'
import create from './services/create'

const router = express.Router()

router.post('/', create)

export default router