import { PropsWithChildren } from 'react';

const ScreenMd: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-4 my-8 w-auto sm:mx-12 md:mx-auto md:w-[560px]'>
      {children}
    </div>
  );
};
export default ScreenMd;
