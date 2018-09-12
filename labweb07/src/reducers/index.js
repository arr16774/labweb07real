import {combineReducers} from 'redux';
import post, * as posterino from './post';
import comment, * as commenterino from './comentarios';

const reducer = combineReducers({
  post,
  comment
});

export const getpost = (state,id) => posterino.getpost(state.post,id);
export const getposts = (state) => posterino.getposts(state.post);
export const getComentario = (state, id) => commenterino.getComentario(state.comment, id);

 

export default reducer;