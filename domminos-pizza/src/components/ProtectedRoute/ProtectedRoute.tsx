import { Navigate } from 'react-router';
import { useAppSelector } from '../Store';
import type { JSX } from 'react';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
