import express from 'express'

import {createAnnoucement,
  getAnnoucement,
  getAnnoucements,
  updateAnnoucement,
  deleteAnnoucement} from '../Controllers/AnnoucementController.js'

const router = express.Router()

// Annoucements
router.post('/create', createAnnoucement)
router.get('/get/:id',getAnnoucement )
router.get('/getAll',getAnnoucements)
router.put('/update', updateAnnoucement)
router.delete('/delete/:id', deleteAnnoucement)

export default router

// module.exports = router;
