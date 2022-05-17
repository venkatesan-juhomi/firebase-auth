import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ children, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          !isAuth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}