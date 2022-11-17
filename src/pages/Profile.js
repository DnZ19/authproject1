import React, {useContext} from 'react';
import styled from "styled-components";
import Buttons from "../components/Buttons";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

import {useAuth} from "../context/AuthContext";


function Profile() {

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {currentUser, logout} = useAuth();

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
                <h1>Profile</h1>
                <p>Logged in as:</p> {currentUser.email}



            </Card>

            <aside>
                <Link
                    to="/forgot-password"
                    className="forgot-link"

                >
                    Reset Password
                </Link>
            </aside>


            <Buttons
                type="buttons"
                buttonText="Logout"
                className="submit_button"
                onClick={handleLogout}
            />

        </Main_Container>

    );
}

export default Profile;

const Main_Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  aside {
    margin-top: 20px;

    .forgot-link {

      color: var(--text-color);
    }
  }



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