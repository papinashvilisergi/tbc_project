import { PropsWithChildren } from 'react';

const HomePageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-auto mt-10 flex w-full flex-col gap-4 md:w-5/6 md:flex-row md:gap-2 lg:w-3/4 lg:gap-4'>
      {children}
    </div>
  );
};
export default HomePageContainer;
