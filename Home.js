import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => setPosts(response.data));
  }, []);

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/view/${post.id}`}>View</Link> |{' '}
          <Link to={`/edit/${post.id}`}>Edit</Link> |{' '}
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
