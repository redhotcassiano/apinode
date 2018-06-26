import express from 'express'
import create from './services/create'
import remove from './services/remove'

const router = express.Router()

router.post('/', create)
router.delete('/:id', remove)

export default router