import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import FormContainer from "../../Components/user/FormContainer";
import { login } from "../../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
   
    dispatch(login(email, password));
  };

  return (

    <div className="login">

      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}

      <form className="loginForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          findOne
        </Typography>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          required="true"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          required="true"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <Link to="/forgotpassword">
          <Typography variant="h6" >
            Forgot password
          </Typography>
        </Link>

        <Link to="/register">
          <Typography variant="h6">New user </Typography>
        </Link>

        <Button type='submit' style={{fontSize:"2vmax",color:"green"}}>Login</Button>
      </form>
    </div>
  );
};

export default LoginScreen;
