import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Link,
} from '@mui/material';
import { PostsContext } from '../interfaces/PostsContext';
import { IComment, IPost } from '../interfaces/post';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { Comment } from '../components/Comment';

export const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const { allPosts, setAllPosts } = useContext(PostsContext);
  const params = useParams();
  const id = params.id;
  const [currentPost, setCurrentPost] = useState<IPost>();

  const [comment, setComment] = useState({ id: +new Date(), text: '' });
  useEffect(() => {
    if (!id) {
      return;
    }
    const post = allPosts.find((item) => item.id === Number(id));
    setCurrentPost(post);
  }, [currentPost, id, allPosts]);

  const updateComments = (comments: Array<IComment>) => {
    if (!currentPost) {
      return;
    }
    const updatedCurrentPost = {
      ...currentPost,
      comments,
    };
    const updatedAllPosts = [...allPosts].filter(
      (post) => post !== currentPost
    );
    setAllPosts([...updatedAllPosts, updatedCurrentPost]);
  };

  const handleAddComment = () => {
    if (comment && currentPost && id) {
      const updatedComments = [
        ...currentPost.comments,
        { id: +new Date(), text: comment.text },
      ];
      updateComments(updatedComments);
    }
  };

  const handleCommentDelete = (id: number) => {
    if (!currentPost) {
      return;
    }
    const filteredComments = currentPost?.comments.filter(
      (comment) => comment.id !== id
    );
    updateComments(filteredComments);
  };
  return (
    <Card
      variant='outlined'
      sx={{ pl: 2, pr: 2 }}
    >
      <CardActions sx={{ justifyContent: 'space-around' }}>
        <Link
          component='button'
          variant='body2'
          onClick={() => {
            navigate(-1);
          }}
        >
          на главную
        </Link>
      </CardActions>
      <CardContent>
        <Typography
          sx={{ mb: 1.5, padding: 0 }}
          variant='h3'
          color='text.secondary'
        >
          {currentPost?.title
            ? `Название: ${currentPost.title}`
            : ' Без названия'}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 20, padding: 0 }}
          color='text.secondary'
        >
          Автор статьи: {currentPost?.author.name} {currentPost?.author.surname}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 20, padding: 0 }}
          variant='body2'
        >
          {moment(currentPost?.date).format('MM/DD/YYYY')}
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontSize: 20, padding: 0 }}
          variant='subtitle1'
        >
          {currentPost?.body}
        </Typography>
      </CardContent>
      <CardContent>
        <TextField
          id='comment'
          label='Комментарий'
          multiline
          rows={3}
          fullWidth
          onChange={(evt) => {
            setComment({ ...comment, text: evt.target.value });
          }}
        />
        <Button
          size='medium'
          onClick={handleAddComment}
        >
          Добавить комментарий
        </Button>

        {currentPost?.comments.map((comment) => (
          <Comment
            id={comment.id}
            text={comment.text}
            handleCommentDelete={handleCommentDelete}
          />
        ))}
      </CardContent>
    </Card>
  );
};
