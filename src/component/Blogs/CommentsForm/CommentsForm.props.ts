export interface CommentsFormProps {
  setIsFormOpen: (isOpen: boolean) => void;
  blog_id: string | number;
  user_id: string | number;
  roles?: string;
}

export interface handlerProps {
  text?: string;
}
