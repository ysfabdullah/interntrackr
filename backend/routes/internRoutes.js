import express from 'express';
import { createAInternship, getAllInternships, updateAInternship, deleteAInternship } from '../internController.js';

const router = express.Router();

router.get("/", getAllInternships);
router.post("/", createAInternship);
router.put("/:id", updateAInternship);
router.delete("/:id", deleteAInternship);

export default router;  
