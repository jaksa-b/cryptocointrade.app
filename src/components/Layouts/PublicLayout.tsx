import * as React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router";
import MainLayout from './MainLayout';

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

const AUTHENTICATED = true // TODO: implement authentication logic

const PublicLayout: React.StatelessComponent<RouteProps> = ({ component, ...rest }) => {
  const renderFn = (Component?: RouteComponent) => (props: RouteProps) => {
    if (!Component) {
      return null
    }

    if (AUTHENTICATED) {
      return (
        <MainLayout {...props}>
          <Component {...props} />
        </MainLayout>
      )
    }

    const redirectProps = {
      to: {
        pathname: "/auth/sign-in",
        state: { from: props.location },
      },
    }

    return <Redirect {...redirectProps} />
  }

  return <Route {...rest} render={renderFn(component)} />
}

export default PublicLayout;

