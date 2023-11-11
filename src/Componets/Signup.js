import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser } from "./Redux/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const passRef = useRef(null);

  const userSubmit = () => {
    const currentName = nameRef.current.value;
    const currentPass = passRef.current.value;
    dispatch(adduser({ name: currentName, password: currentPass }));

    navigate("/login");
  };

  return (
    <div>
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
          <h1 style={{ textAlign: "center" }}>Sign up</h1>
          <Form
            className="border p-4 m-4 bg-white"
            style={{ borderRadius: "20px", textAlign: "center" }}
          >
            <input
              ref={nameRef}
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
              type="email"
              name="email"
              placeholder="E-mail"
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
              ref={passRef}
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

            <Button onClick={userSubmit} variant="outline-dark">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
