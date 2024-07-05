import React from 'react';

import UsersList from '../components/UsersList';
const Users = () => {
  const USERS = [{id : 'U1' ,
    name: 'George' ,
    image : "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    placeCount : 15,
  }]
  
  return <UsersList 
    items = {USERS}
  /> 
};

export default Users;
