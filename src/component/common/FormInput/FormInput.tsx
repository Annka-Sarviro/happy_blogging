import IFieldProps from './IFieldProps';

export function FormInput(props: IFieldProps) {
  const { data, reg, errors, options } = props;
  const { type, name, label } = data;

  return (
    <div className="relative">
      <input
        id={`formField${name}`}
        className={` p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light border border-purple-80 ${
          errors[name] ? 'border-red-80 border border-style:solid' : 'purple-80 border'
        }`}
        type={type}
        {...reg(name, options)}
        name={name}
        placeholder={label}
        aria-label={label}
      />

      <div className={`absolute left-0 text-red-80 text-xs max-[346px]:text-[10px] bottom-[8px]`}>
        {errors[name] && <p>{...Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
}
