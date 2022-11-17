import React, {useContext} from 'react';
import styled from "styled-components";
import Buttons from "../components/Buttons";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {useAuth} from "../context/AuthContext";


function Home() {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {currentUser, logout} = useAuth();

    function handleUpdate() {
        navigate("/profile");
    }

    async function handleLogout() {

        setError("");

        try {
            await logout()
            navigate("/login");
        } catch {
            setError("fout!")
        }

    }

    return (

        <Main_Container>
            <Card>
                <h1>Home....</h1>
                <p>Email:</p> {currentUser.email}

                <Buttons
                    type="buttons"
                    buttonText="Update Profile"
                    className="submit_button"
                    onClick={handleUpdate}
                />

            </Card>


            <Buttons
                type="buttons"
                buttonText="Logout"
                className="submit_button"
                onClick={handleLogout}
            />

        </Main_Container>

    );
}

export default Home;

const Main_Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Card = styled.div`

  width: 80vw;
  background-color: var(--main-bg-color);
  opacity: 0.5;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--main-text-color);
  }


`;