import React from 'react';
import { PostProps } from '../types/PostProps.type';

const PostCard = (props: PostProps) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </>
  );
};

export default PostCard;
