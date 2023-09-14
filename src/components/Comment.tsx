import { Button, Divider, Typography } from '@mui/material';
import React from 'react';

interface ICommentProps {
  id: number;
  text: string;
  handleCommentDelete: (id: number) => void;
}
export const Comment: React.FC<ICommentProps> = ({
  id,
  text,
  handleCommentDelete,
}) => {
  return (
    <>
      <Typography
        key={id}
        sx={{ mt: 5, fontSize: 20, padding: 0 }}
        color='text.secondary'
      >
        {text}
        <Button
          size='medium'
          onClick={() => handleCommentDelete(id)}
        >
          удалить комментарий
        </Button>
        <Divider
          sx={{ mt: 4 }}
          variant='fullWidth'
        />
      </Typography>
    </>
  );
};
