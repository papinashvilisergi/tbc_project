import React from 'react';

export const PageContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <main className='flex-grow-1 flex min-h-screen flex-col'>{children}</main>
  );
};
