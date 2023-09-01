'use client';

import { Dialog } from '@mui/material';
import { useState } from 'react';

import { NewBlogsForm } from '../NewBlogsForm';

import d from '@/data/blogs.json';

export const NewBlogs = ({ id }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="fixed bottom-[240px] right-[30px] w-10 h-10 rounded-full bg-main_card hover:bg-main_dark text-white flex justify-center items-center font-bold text-2xl"
      >
        {isModalOpen ? d.button.cansel : d.button.add}
      </button>
      {isModalOpen && (
        <Dialog open={isModalOpen} onClose={handleClick}>
          <NewBlogsForm id={id} />
        </Dialog>
      )}
    </div>
  );
};
