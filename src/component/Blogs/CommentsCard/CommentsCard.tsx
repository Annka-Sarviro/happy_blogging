import { CommentCardProps } from './CommentCard.props';

export const CommentsCard = ({ item }: CommentCardProps) => {
  return <li className="text-left border-b-2 inline-block w-[100%] text-sm">{item.text}</li>;
};
