import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => setPost(response.data));
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewPost;
