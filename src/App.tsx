import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import data from './mock.json';
import { MainPage } from './pages/MainPage';
import PostsProvider from './interfaces/PostsContext';
import { PostPage } from './pages/PostPage';
import { IPost } from './interfaces/post';

const App: React.FC = () => {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (!allPosts.length) {
      setAllPosts([...data]);
    }
  }, []);
  return (
    <PostsProvider value={{ allPosts, setAllPosts }}>
      <Router>
        <Container className='container'>
          <Routes>
            <Route
              path='/'
              element={<MainPage />}
            ></Route>
            <Route
              path='/postpage/:id'
              element={<PostPage />}
            ></Route>
          </Routes>
        </Container>
      </Router>
    </PostsProvider>
  );
};

export default App;
