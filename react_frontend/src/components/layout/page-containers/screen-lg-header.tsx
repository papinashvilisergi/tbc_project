import { PropsWithChildren } from 'react';

const ScreenLgHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-4 max-w-screen-xl sm:mx-12 md:mx-16 2xl:mx-auto'>
      {children}
    </div>
  );
};
export default ScreenLgHeader;
