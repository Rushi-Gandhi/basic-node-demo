import express from 'express';
import { Domain } from '../domain/domain';


const router = express.Router();

router.get('/get',Domain.getdata);
router.post('/post',Domain.getdata);
router.put('/update',Domain.getdata);
router.delete('/delete',Domain.getdata);

export default router ;