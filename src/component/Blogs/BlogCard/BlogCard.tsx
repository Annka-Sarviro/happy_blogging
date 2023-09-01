import { Card, Typography } from '@mui/material';

import { BlogsProps } from './BlogsCard.props';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { CommentsList } from '../CommentsList';

import QuoteImg from '../../../../public/svg/quote.svg';

export const BlogCard = async (props: BlogsProps) => {
  const { title, text, owner, id } = props.item;

  const { user_id, roles } = props;
  const supabase = createServerComponentClient<any>({ cookies });

  const { data: author } = await supabase.from('profiles').select().eq('id', owner);

  let { data: comments, error } = await supabase.from('comments').select().eq('blog_id', id);

  const username = author?.[0]?.username;

  return (
    <Card
      className="p-2 min-h-[280px] max-w-[300px] place-self-stretch !flex flex-col"
      component="li"
    >
      <Typography variant="h6" component="h3" className="mb-4 ">
        {title}
      </Typography>
      <QuoteImg className="w-[30px] h-[30px]" />
      <Typography variant="subtitle1" component="p" className="italic mb-3 min-h-[30px] ">
        {text}
      </Typography>
      <QuoteImg className="w-[30px] h-[30px] rotate-180 ml-auto" />
      <Typography variant="caption" component="p" className="text-left mb-8">
        {username}
      </Typography>
      <CommentsList comments={comments} blog_id={id} user_id={user_id} roles={roles} />
    </Card>
  );
};
