import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Children is waht ever we are surrounding provider with
// This is what GIVES you the data
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {/* anything state that needs to get passed to components are done here */}
      {children}
    </GithubContext.Provider>
  );
};

// This is what PROVIDES the component with the data
export default GithubContext;
