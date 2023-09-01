import ISelectProps from './ISelectProps';

export const Select = (props: ISelectProps) => {
  const { data, reg, errors, options } = props;
  const { name, label, value1, value2 } = data;
  return (
    <div className="relative">
      <select
        className={` p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light border border-main_dark ${
          errors[name] ? 'border-red_error border border-style:solid' : ' border'
        }`}
        {...reg(name, options)}
        name={name}
        placeholder={label}
        aria-label={label}
        defaultValue={value1}
      >
        <option
          value={value1}
          defaultChecked
          className={` p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light border }`}
        >
          {value1}
        </option>
        <option value={value2}>{value2}</option>
      </select>
    </div>
  );
};
