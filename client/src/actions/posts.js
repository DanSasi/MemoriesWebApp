import * as api from '../api';
import Post from '../components/Posts/Post/Post';

//Action Creators 
export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fechPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    }catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error.message);
    }
}