import ISelectProps from './ISelectProps';

export const Select = (props: ISelectProps) => {
  const { data, reg, errors, options } = props;
  const { type, name, label, value1, value2 } = data;
  return (
    <div className="relative">
      <select
        className={` p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light border border-purple-80 ${
          errors[name] ? 'border-red-80 border border-style:solid' : 'purple-80 border'
        }`}
        {...reg(name, options)}
        name={name}
        placeholder={label}
        aria-label={label}
        value={value1}
      >
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
      </select>
    </div>
  );
};
