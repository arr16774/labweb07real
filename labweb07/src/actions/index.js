import * as types from '../types';

export const addPost = (  
  id,
  title,
  body,
  comment,
  ) => ({
  type: types.POST_ADDED,
  payload: {
    id,
    title,
    body,
    comment,
  }
});

export const addComment = (
  id,
  idPost,
  body,
) => ({
  type: types.COMMENT_ADDED,
  payload: {
    id,
    idPost,
    body,
  }
});

export const votePost = (
  vote
) => ({
  type: types.POST_VOTED,
  payload: {
    vote
  }

});