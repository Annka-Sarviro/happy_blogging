'use client';
import data from '@/data/comments.json';
import { Button, Dialog } from '@mui/material';
import { useState } from 'react';
import { CommentsCard } from '../CommentsCard';
import { CommentsForm } from '../CommentsForm/CommentsForm';

import { CommentsListProps } from './CommentsList.props';

export const CommentsList = ({ comments, blog_id, user_id, roles }: CommentsListProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handelClick = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <>
      <ul className="mb-4 border-t-2 justify-self-end mt-[auto]">
        {comments?.map((item: any) => {
          return <CommentsCard item={item} key={item.id} />;
        })}
      </ul>
      {roles === 'commentator' && (
        <Button
          onClick={handelClick}
          variant="contained"
          className=" bg-main_card hover:bg-main_dark lowercase "
        >
          {isFormOpen ? data.button.close : data.button.add}
        </Button>
      )}

      {isFormOpen && (
        <Dialog open={isFormOpen} onClose={handelClick}>
          <CommentsForm
            setIsFormOpen={setIsFormOpen}
            blog_id={blog_id}
            user_id={user_id}
            roles={roles}
          />
        </Dialog>
      )}
    </>
  );
};
