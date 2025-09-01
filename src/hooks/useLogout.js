import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '~/store/auth';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate('/signin');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  }, [dispatch, navigate]);

  return { logout: handleLogout };
};
