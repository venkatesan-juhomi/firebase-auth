import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profile() {
  const profilePicture = useSelector((state) => state.auth.profile);
  return (
    <>
    <h1>You are in Profile Page now...</h1>
    <h2>😎How is my profile😎</h2>
    <img src={profilePicture}/><br/>
    <Link to="/home">Back to home</Link>
    </>
  )
}

export default Profile;