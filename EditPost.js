import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
      setTitle(response.data.title);
      setContent(response.data.content);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/posts/${id}`, { title, content })
      .then(() => navigate('/'));
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
