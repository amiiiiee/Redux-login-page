import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginFalse } from './Redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const Logout=()=>{
    dispatch(loginFalse())
    navigate('/')
  }
  return (
    <div style={{textAlign:'center'}}>
      <Container>
      <br />
      <br />
      <h1>Home page</h1>
      <br />
      <hr />
      <br />
      <p>............... Welcomeeeeeee to Homeeeeiieeee ...............</p>
      <br />
      <br />
      <Button variant="outline-dark" onClick={Logout}>Logout</Button>
      </Container>
    </div>
  )
}

export default Home
