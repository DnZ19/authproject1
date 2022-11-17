import React, {useContext, useState} from 'react';
import styled from "styled-components";
import Buttons from "../components/Buttons";
import BackGround from "../assets/background.svg";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function ForgotPassword() {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [loginEmail, setLoginEmail] = useState("");
    const [message, setMessage] = useState("");

    const { resetPassword } = useAuth();

    async function handleForgotLogin(e) {
        e.preventDefault();


        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(loginEmail);
            setMessage("Check your inbox for further instructions.")


        } catch ( e ) {
            console.error( e.message );
            setError("failed to reset password");
        }
        setLoading(false);
    }


    return (

        <Outer_Container>

            <Inner_Container>

                <main>

                    <h1>Reset Password</h1>

                    {error && <aside className="alert_box">{error}</aside>}
                    {message && <aside className="alert_box">{message}</aside>}

                        <form onSubmit={handleForgotLogin}>
                            <input
                                type="text"
                                placeholder="Email"
                                onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                }}
                            />

                            <Buttons
                                type="submit"
                                buttonText="Reset Password"
                                //onClick={() => setActiveTab("login")}
                                className="submit_button"
                            />

                            {/*<p>Need an account? <span onClick={() => setActiveTab("register")}>Register</span></p>*/}

                            <aside>
                                <Link
                                    to="/login"
                                    className="forgot-link"
                                >
                                    Login
                                </Link>
                            </aside>

                        </form>

                </main>


            </Inner_Container>


        </Outer_Container>

    );
}

export default ForgotPassword;

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
      background-color: white;
      opacity: 0.8;
      color: var(--bg-color-six);
      font-size: 25px;
      border: 2px dotted var(--bg-color-five);
      border-radius: 5px;
      margin-top: 40px;
      padding: 6px;
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