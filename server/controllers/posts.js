import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
export const getPosts = async (reg,res) =>{
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (reg,res) =>{
    
    const post = req.body; 
    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (reg, res) => {
    const {id: _id} = req.params; 
    const post = req.body; 
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no Post with that id');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id},{ new: true});
    res.json(updatePost);

}

export const deletePost = async (reg,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no Post with that id');
    const deletePost = await PostMessage.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfuly!'});
}

export const likePost = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no Post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost)
}