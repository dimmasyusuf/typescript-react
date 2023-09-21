import React from 'react';
import PostCard from './PostCard';
import { PostProps } from '../types/PostProps.type';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const PostList = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      <h1>PostList</h1>
      {/* <PostCard title='Post Title' body='Post Description' /> */}
      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
};

export default PostList;
