import { Router } from 'express';
import { createSubscribers, getSubscribers } from './controllers';

const router = Router();

router.post('/', createSubscribers)

router.get('/', getSubscribers);

export default router;