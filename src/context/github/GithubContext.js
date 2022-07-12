import { createContext, useReducer } from 'react';
import githubReducer from '../GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Children is waht ever we are surrounding provider with
// This is what GIVES you the data
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    });
    const data = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        //   state is now an object
        users: state.users,
        loading: state.loading,
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
