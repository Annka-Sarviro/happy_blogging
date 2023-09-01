type ValidationFunction = (value: string) => boolean | string;
import data from '@/data/comments.json';

const fieldsParams: {
  [key: string]: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    validate?: { noText: ValidationFunction };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
} = {
  text: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.text.empty,
    },

    required: data.messages.validation.text.required,
    minLength: {
      value: 9,
      message: data.messages.validation.text.min,
    },
    maxLength: {
      value: 600,
      message: data.messages.validation.text.max,
    },
  },
};

export default fieldsParams;
