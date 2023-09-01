type ValidationFunction = (value: string) => boolean | string;
import data from '@/data/auth.json';

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
  username: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.name.empty,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-\s]+$/,
      message: data.messages.validation.name.reg,
    },
    required: data.messages.validation.name.required,
    minLength: {
      value: 2,
      message: data.messages.validation.name.min,
    },
    maxLength: {
      value: 70,
      message: data.messages.validation.name.max,
    },
  },
  password: {
    validate: {
      noText: (value: string) =>
        !!value.match(/^(?!\s*$).+/) || data.messages.validation.password.empty,
    },
    pattern: {
      value: /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-\s]+$/,
      message: data.messages.validation.password.reg,
    },
    required: data.messages.validation.password.required,
    minLength: {
      value: 6,
      message: data.messages.validation.password.min,
    },
    maxLength: {
      value: 45,
      message: data.messages.validation.password.max,
    },
  },

  email: {
    required: data.messages.validation.email.required,
    pattern: {
      value:
        /^(?=^.{3,63}$)(^[A-Za-z0-9]+(([_\\.\\-](?=[A-Za-z0-9]))[a-zA-Z0-9]+([\\-\\.](?=[A-Za-z0-9]))*?)*@(\w+([\\.\\-](?=(\w|\d))))+[a-zA-Z]{2,6})$/,
      message: data.messages.validation.email.reg,
    },

    maxLength: {
      value: 200,
      message: data.messages.validation.email.max,
    },
    minLength: {
      value: 6,
      message: data.messages.validation.email.min,
    },
  },
};

export default fieldsParams;
