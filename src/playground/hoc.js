import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please dont share</p>}

      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthenticaiton = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Login required</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticaiton(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="there are details" />,
  document.getElementById("app")
);
