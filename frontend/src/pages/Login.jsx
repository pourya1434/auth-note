import React from "react";
import Form from "../components/Form";

function Login() {
  return (
    <>
      <Form route="api/token/" method="login" />
      {console.log(import.meta.env.VITE_API_URL)}
    </>
  );
}

export default Login;
