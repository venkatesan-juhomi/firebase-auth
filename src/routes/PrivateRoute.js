import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuth
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}
