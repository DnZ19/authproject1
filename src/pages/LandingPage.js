import React, {useContext, useState} from 'react';
import styled from "styled-components";
import Buttons from "../components/Buttons";
import BackGround from "../assets/background.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function LandingPage() {


    const [activeTab, setActiveTab] = useState("login");

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();

    const { register, login } = useAuth();

    async function handleSubmitLogin(e) {
        e.preventDefault();

        // console.log("komt wel door")

        try {
            setError("");
            setLoading(true);
            await login(loginEmail, loginPassword);

            navigate("/home");


        } catch ( e ) {
            console.error( e.message );
            setError("failed to create an account!");
        }
        setLoading(false);
    }

    async function handleSubmitRegistration(e) {
        e.preventDefault();

       // console.log("komt wel door")

        if (registerPassword !== registerConfirmPassword) {
            console.log("ww mismatch");
            return (
                setError("passwords do not match!")
            )
        }

        try {
            setError("");
            setLoading(true);
            await register(registerEmail, registerPassword);

            setActiveTab("login");



        } catch ( e ) {
            console.error( e.message );
            setError("failed to create an account!");
        }
        setLoading(false);
    }


    return (

        <Outer_Container>

            <Inner_Container>

                <main>

                    <header>
                        <Buttons
                            type="button"
                            buttonText="Register"
                            className={activeTab === "register" ? "active" : ""}
                            onClick={() => setActiveTab("register") | setError("")}
                        />

                        <Buttons
                            type="button"
                            buttonText="Login"
                            className={activeTab === "login" ? "active" : ""}
                            onClick={() => setActiveTab("login") | setError("")}
                        />
                    </header>

                    {error && <aside className="alert_box">{error}</aside>}

                    {activeTab === "register" &&

                        <form onSubmit={handleSubmitRegistration}>
                            {/*<input*/}
                            {/*    type="text"*/}
                            {/*    placeholder="Name"*/}
                            {/*/>*/}

                            <input
                                type="text"
                                placeholder="Email"
                                onChange={(event) => {
                                    setRegisterEmail(event.target.value);
                                }}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(event) => {
                                    setRegisterPassword(event.target.value);
                                }}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(event) => {
                                    setRegisterConfirmPassword(event.target.value);
                                }}
                                required
                            />

                            <label><input type="checkbox" required /> I agree with the terms & conditions</label>

                            <Buttons
                                type="submit"
                                buttonText="Register"
                                className="submit_button"
                                disabled={loading}
                            />

                        </form>
                    }

                    {activeTab === "login" &&

                        <form onSubmit={handleSubmitLogin}>
                            <input
                                type="text"
                                placeholder="Email"
                                onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                }}
                            />

                            <Buttons
                                type="submit"
                                buttonText="Login"
                                onClick={() => setActiveTab("login")}
                                className="submit_button"
                            />

                            <p>Need an account? <span onClick={() => setActiveTab("register")}>Register</span></p>

                            <aside>
                                <Link
                                    to="/forgot-password"
                                    className="forgot-link"

                                >
                                    Forgot Password?
                                </Link>
                            </aside>

                        </form>

                    }




                </main>


            </Inner_Container>


        </Outer_Container>

    );
}

export default LandingPage;

const Outer_Container = styled.div`

  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;


  //border: 1px dotted blue;
  width: 95vw;
  height: 100vh;

`;

const Inner_Container = styled.div`

  height: 95vh;
  margin: 0 20px;
  //border: 1px solid white;

  display: flex;
  flex-direction: column;
  align-items: center;


  main {

    //header {
    //  display: flex;
    //  flex-direction: column;
    //}

    width: 100%;
    max-width: 400px;
    height: 50vh;
    margin-top: 120px;

    background-color: rgba(255, 255, 255, 0.05);

    //border: 1px solid white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: flex-start;
    
    .alert_box {
      background-color: var(--main-bg-color);
      //opacity: 0.8;
      color: var(--text-color);
      font-size: 25px;
      font-weight: lighter;
      border: 2px solid var(--bg-color-three);
      border-radius: 5px;
      margin-top: 40px;
      padding: 6px;
      width: 45vw;
      text-align: center;
    }

    header {
      width: 100%;
      flex-direction: row;
      align-items: flex-start;
    }

    form {
      //border: 1px solid yellow;
      width: 80%;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--bg-color-five);
        color: var(--main-text-color);
        padding: 6px 0;
        margin-bottom: 10px;
        font-size: 18px;
      }
      
      p {
        margin-top: 20px;
        color: var(--main-text-color);
        text-align: center;
      }
      
      aside {
        margin-top: 20px;

        .forgot-link {
          color: var(--main-text-color);
        }
        
      }
      
      

      label {
        width: 100%;
        font-size: 15px;
        margin-top: 6px;
        color: var(--main-text-color);
        display: block;

        input[type=checkbox] {
          vertical-align: middle;
          position: relative;
          bottom: -3px;
          width: 15px;
          height: 15px;
        }

      }

    }


  }

  h1 {
    color: black;
  }

`;