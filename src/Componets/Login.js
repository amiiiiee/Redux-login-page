import React, { useEffect, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginTrue } from './Redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.user.login);

  const usernameRef = useRef(null);
  const userpassRef = useRef(null);

  const LoginSubmit = () => {
    const LogUserName = usernameRef.current.value;
    const LogPass = userpassRef.current.value;
    dispatch(loginTrue({ name: LogUserName, password: LogPass }));
  };

  useEffect(() => {
    if (loginData) {
      navigate('/home');
    }
  }, [loginData, navigate]);

  return (
    <div style={{ alignItems: "center" }} className="p-4  mt-4 ">
      <Container
        className="border p-4  mt-5 "
        style={{
          width: "500px",
          alignItems: "center",
          borderRadius: "20px",
          background: "rgb(230, 230, 219)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form
          className="border p-4 m-4 bg-white"
          style={{ borderRadius: "20px", textAlign: "center" }}
        >
          <input
            ref={usernameRef}
            type="text"
            name="text"
            placeholder="User Name"
            required
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
            }}
          />

          <br />
          <br />
          <input
            ref={userpassRef}
            type="password"
            name="password"
            placeholder="Password"
            required
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "10px",
              border: "1.2px solid",
            }}
          />
          <br />
          <br />

          <Button onClick={LoginSubmit} variant="outline-dark" >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;