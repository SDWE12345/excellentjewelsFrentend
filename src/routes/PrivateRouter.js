import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getSessionData } from '../Helper/AuthTokenHelper';
import { setIsLogin } from '../Components/Redux/reducers/auth.slice';

const PrivateRouter = ({ children }) => {
  const dispatch = useDispatch();
  if (!getSessionData()) {
    dispatch(setIsLogin(false));
    return <Navigate to="/login" replace={true} />;
  }
  return <div>{children}</div>;
};
export default memo(PrivateRouter);
