import { meAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React from 'react';
import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const me = useAtomValue(meAtom);

  if (me) {
    return <Navigate to='/home' />;
  }

  return children || <Outlet />;
};
