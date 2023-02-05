import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Children is whatever we are surrounding provider with
// This is what GIVES you the data
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    console.log({ params });

    // Query params
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      // headers: {
      //   Authorization: `token ${GITHUB_TOKEN}`,
      // },
    });

    console.log(response);

    // returns items by destructuring
    const { items } = await response.json();
    console.log(items);
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Get single user
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {});

    // error handling
    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      // returns data
      const data = await response.json();
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }

    // const data = await response.json();
    // dispatch({
    //   type: 'GET_USER',
    //   payload: data,
    // });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        //   state is now an object that is shared
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
      }}
    >
      {/* anything state that needs to get passed to components are done here */}
      {children}
    </GithubContext.Provider>
  );
};

// This is what PROVIDES the component with the data
export default GithubContext;
