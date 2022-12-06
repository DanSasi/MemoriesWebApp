import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fechPosts = ()=> axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`); 
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likedPost = (id, likedPost) => axios.patch(`${url}/${id}/likePost`); 
