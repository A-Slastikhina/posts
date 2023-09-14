import React, { useContext, useState, useLayoutEffect } from 'react';

import { TextField, Button } from '@mui/material';
import { PostsContext } from '../interfaces/PostsContext';

export const NewPost: React.FC = () => {
  const { allPosts, setAllPosts } = useContext(PostsContext);
  const defaultName = localStorage.user ? JSON.parse(localStorage.user) : '';
  const user = {
    userName: defaultName['userName'],
    surname: defaultName['surname'],
  };

  useLayoutEffect(() => {
    setCurrentName(user.userName);
    setCurrentSurname(user.surname);
  }, []);

  const [currentName, setCurrentName] = useState(user.userName);
  const [currentSurname, setCurrentSurname] = useState(user.surname);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [isErrorCheckingActive, setIsErrorCheckingActive] = useState(false);
  const handleCreateNewPost = () => {
    if (!currentTitle || !currentText) {
      alert('Заполните обязательные поля');
      setIsErrorCheckingActive(true);
      return;
    }
    const newPost = {
      title: currentTitle,
      body: currentText,
      date: Number(new Date()),
      author: {
        name: currentName,
        surname: currentSurname,
      },
      id: +new Date(),
      comments: [],
    };
    setAllPosts((allPosts) => [...allPosts, newPost]);
    setCurrentTitle('');
    setCurrentText('');
  };
  const handleNameChanged = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCurrentName(evt.target.value);
  };
  const handleSurnameChanged = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCurrentSurname(evt.target.value);
  };
  const handleTitleChanged = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsErrorCheckingActive(false);
    setCurrentTitle(evt.target.value);
  };
  const handlePostChanged = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsErrorCheckingActive(false);
    setCurrentText(evt.target.value);
  };
  return (
    <form className='input-container'>
      <TextField
        id='name-input'
        label='Имя'
        multiline
        maxRows={4}
        value={currentName}
        onChange={handleNameChanged}
      />
      <TextField
        id='surname-input'
        label='Фамилия'
        multiline
        maxRows={4}
        value={currentSurname}
        onChange={handleSurnameChanged}
      />

      <TextField
        id='title'
        label='Название'
        multiline
        maxRows={4}
        required={true}
        value={currentTitle}
        error={Boolean(!currentTitle && isErrorCheckingActive)}
        onChange={handleTitleChanged}
      />

      <TextField
        id='post-body'
        label='Пост'
        multiline
        rows={4}
        fullWidth
        required={true}
        value={currentText}
        error={Boolean(!currentText && isErrorCheckingActive)}
        onChange={handlePostChanged}
      />
      <Button
        variant='contained'
        onClick={() => {
          handleCreateNewPost();
        }}
      >
        Добавить статью
      </Button>
    </form>
  );
};
