import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import jwtdecode from 'jwt-decode';
import { Redirect } from 'react-router-dom';

const initialState = {
  user: {},
  error: '',
  isAuthenticated: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setError = (error) => {
    dispatch({
      type: 'SET_ERROR',
      payload: error,
    });
  };

  const userRegister = async (formData, history) => {
    const res = await axios.post('/register', formData);
    if (res.status === 201) {
      history.push('/');
    } else {
      setError(res.data.mgs);
    }
  };

  const loginUser = async (formData, history) => {
    const res = await axios.post('/login', formData);
    if (res.status === 200) {
      localStorage.setItem('isAuth', 'true');
      history.push('/dashboard');
    } else {
      setError('Invalid Credential');
    }
  };

  const logOut = async (history) => {
    try {
      await axios.post('/logout');
      localStorage.removeItem('isAuth');
      history.push('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const dashboard = async (history) => {
    try {
      const res = await axios.get('/dashboard');
      dispatch({
        type: 'USER_DATA',
        payload: res.data,
      });
    } catch (err) {
      if (err) {
        history.push('/');
      }
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        setError,
        userRegister,
        loginUser,
        dashboard,
        logOut,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
