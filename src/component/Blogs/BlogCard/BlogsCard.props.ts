export interface BlogsCardProps {
  title: string;
  text: string;
  owner: string;
  id: any;
}

export interface BlogsProps {
  key: any;
  item: BlogsCardProps;
  user_id: any;
  roles: string;
}
