import React from 'react';
import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <>
      {/* Search Component */}
      <UserResults />
      {/* {process.env.REACT_APP_GITHUB_TOKEN} */}
      {/* CAN ACCESS ENV VARIABLES (GLOBAL) */}
    </>
  );
}

export default Home;
