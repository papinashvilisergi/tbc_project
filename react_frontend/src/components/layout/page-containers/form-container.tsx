import { PropsWithChildren } from 'react';
interface FormContainerProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
const FormContainer: React.FC<PropsWithChildren<FormContainerProps>> = ({
  children,
  onSubmit,
}) => {
  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      {children}
    </form>
  );
};
export default FormContainer;
