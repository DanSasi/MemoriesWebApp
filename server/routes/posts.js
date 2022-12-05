import express from 'express';
import { getPosts ,createPost} from '../controllers/posts';

const router = express.Router();

// localhost: 5000/post

router.get('/', getPosts);
router.post('/', createPost);



export default router; 

