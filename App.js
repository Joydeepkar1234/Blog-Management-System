import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ViewPost from './pages/ViewPost';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/create">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/view/:id" element={<ViewPost />} />
      </Routes>
    </div>
  );
};

export default App;
