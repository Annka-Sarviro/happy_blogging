export interface BlogsCardProps {
  title: string;
  text: string;
  owner: string;
  id: number | string;
}

export interface BlogsProps {
  key: any;
  item: BlogsCardProps;
  user_id: number | string;
  roles: string;
}
