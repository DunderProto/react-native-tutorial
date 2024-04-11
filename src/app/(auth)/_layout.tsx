import React from "react";
import { Route, Redirect } from "react-router-dom";

interface LayoutProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<LayoutProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Layout: React.FC = () => {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <div>
      <h1>Header</h1>
      <PrivateRoute
        path="/dashboard"
        component={Dashboard}
        isAuthenticated={isAuthenticated}
      />
      <PrivateRoute
        path="/profile"
        component={Profile}
        isAuthenticated={isAuthenticated}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
