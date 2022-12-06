import express from 'express';
import { getPosts ,createPost, updatePost, deletePost, likePost} from '../controllers/posts';

const router = express.Router();

// localhost: 5000/post

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id',updatePost)
router.delete('/:id',deletePost);
router.patch('/:id/likePost', likePost);

export default router; 

