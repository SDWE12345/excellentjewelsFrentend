import axios from 'axios';

export const getSessionData = () => {
  const sessionData = localStorage.getItem('userLoginInfo');
  if (sessionData) {
    return JSON.parse(window.atob(sessionData));
  } else {
    return null;
  }
};

export const clearToken = () => {
  localStorage.removeItem('userLoginInfo');
  delete axios.defaults.headers.common['Authorization'];
};
