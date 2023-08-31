import { BlogsProps } from './BlogsCard.props';

export const BlogCard = (props: BlogsProps) => {
  const { title, text, id } = props.item;
  return (
    <li>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};
