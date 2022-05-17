import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import { useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.name);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <>
    <h1>Home Page</h1>
    <h2>Welcome {userName}!</h2>
    <Link to="/profile">Go to profile</Link><br/><br/>
    <button onClick={logoutHandler}>logout</button>
    </>
  )
}