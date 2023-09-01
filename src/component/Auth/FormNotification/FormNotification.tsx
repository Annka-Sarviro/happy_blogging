import FormNotificationProps from '@/component/Auth/FormNotification/FormNotification.props';

export function FormNotification(props: FormNotificationProps) {
  const { forOrdering, subText, forError } = props;
  return (
    <div className="before:w-[106px] before:h-[130px] p-4 !w-[250px] before:content='' before:absolute before:bottom-[14px] before:left-[3%] bg-no-repeat text-center">
      <p
        className={`${
          forError ? 'text-red_error' : 'text-main_dark'
        } max-w-[242px] mx-auto leading-[24px]`}
      >
        {subText}
      </p>
    </div>
  );
}
