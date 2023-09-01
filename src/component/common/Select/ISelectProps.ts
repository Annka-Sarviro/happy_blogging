import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface ISelectProps {
  data: {
    name: string;
    type: string;
    label: string;
    value1?: string;
    value2?: string;
  };
  reg: UseFormRegister<any>;
  errors?: any;
  options: RegisterOptions;
}

export default ISelectProps;
