import IFieldProps from './IFieldProps';

export function FormInput(props: IFieldProps) {
  const { data, reg, errors, options, showErrors } = props;
  const { type, name, label } = data;

  return (
    <div className="relative">
      <input
        id={`formField${name}`}
        className={` p-3 rounded-2xl mb-7 w-[100%] bg-lightWite text-black font-light border  ${
          showErrors && errors[name]
            ? 'border-red_error border border-style:solid'
            : 'border-main_dark'
        }`}
        type={type}
        {...reg(name, options)}
        name={name}
        placeholder={label}
        aria-label={label}
      />

      <div
        className={`absolute left-0 text-red_error text-xs max-[346px]:text-[10px] bottom-[8px]`}
      >
        {showErrors && errors[name] && <p>{...Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
}
