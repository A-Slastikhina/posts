import { useContext, useEffect } from 'react';
import { PostsContext } from '../interfaces/PostsContext';
import { useLocalstorage } from '../hooks/useLocalStorage';

import data from '../mock.json';
import { NewPost } from '../components/NewPost';
import { IPost } from '../interfaces/post';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const MainPage: React.FC = () => {
  const { allPosts, setAllPosts } = useContext(PostsContext);
  useLocalstorage('user', { userName: 'Alex', surname: 'Fox' });
  useLocalstorage('allPosts', allPosts);

  const deletePostHandler = (id: number) => {
    setAllPosts(allPosts.filter((post) => post.id !== id));
  };

  return (
    <>
      <NewPost />
      {allPosts.map((item: IPost) => (
        <Card
          sx={{ maxWidth: 800, margin: `0 auto` }}
          key={item.id}
          variant='outlined'
        >
          <CardContent>
            <Typography
              sx={{ mb: 1.5, padding: 0 }}
              variant='h3'
              color='text.secondary'
            >
              Название: {item.title}
            </Typography>
            <Typography
              sx={{ mb: 1.5, fontSize: 20, padding: 0 }}
              color='text.secondary'
            >
              Автор статьи: {item.author.name} {item.author.surname}
            </Typography>
            <Typography
              sx={{ mb: 1.5, fontSize: 20, padding: 0 }}
              variant='subtitle1'
            >
              {item.body.substring(0, 40)}...
            </Typography>

            <Typography
              sx={{ mb: 1.5, fontSize: 20, padding: 0 }}
              variant='body2'
            >
              Опубликовано {moment(item.date).format('MM/DD/YYYY')}
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: 'space-around' }}>
            <Link to={`/postpage/${item.id}`}>
              <Button size='medium'>Читать полностью</Button>
            </Link>
            <Button
              size='medium'
              onClick={() => {
                deletePostHandler(item.id);
              }}
            >
              удалить
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
