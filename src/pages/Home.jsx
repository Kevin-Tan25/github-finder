import React from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
      {/* CAN ACCESS ENV VARIABLES (GLOBAL) */}
    </>
  );
}

export default Home;
