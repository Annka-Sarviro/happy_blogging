import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IFieldProps {
  data: {
    name: string;
    type: string;
    label: string;
  };
  reg: UseFormRegister<any>;
  errors?: any;
  options?: RegisterOptions;
  showErrors?: boolean;
}

export default IFieldProps;
