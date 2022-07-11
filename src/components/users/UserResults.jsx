import React from 'react';
import { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  // Inside the {} we are pulling WHAT we want from the context

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <h3>
            <UserItem id={user.id} user={user} />
          </h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
