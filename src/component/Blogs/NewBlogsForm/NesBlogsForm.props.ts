import { FieldValues } from 'react-hook-form';

export interface HandlerProps {
  title: string;
  text: string;
  onSubmitHandler?: FieldValues;
}
