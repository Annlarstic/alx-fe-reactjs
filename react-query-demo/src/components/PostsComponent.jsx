
import React from 'react';
import { useQuery } from 'react-query';



const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const PostsComponent = () => {

  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
 
    staleTime: 5 * 60 * 1000, 
    cacheTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true, 
    keepPreviousData: true,   
  });


  if (isLoading) return <div>Loading...</div>;


  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
