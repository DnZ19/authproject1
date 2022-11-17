import React from 'react';
import styled from "styled-components";
import {useState} from "react";

function Buttons({ type, buttonText, className, onClick, disabled}) {



    return (

        <Button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonText}
        </Button>

    );
}

export default Buttons;

const Button = styled.button`

  width: auto;
  height: 30px;
  border: none;
  background-color: transparent;
  color: var(--text-color);
  margin: 20px 0px 0 40px;
  font-size: 20px;
  font-weight: lighter;
  cursor: pointer;
  
  
  &:hover {
    //background-color: var(--bg-color-six);
    color: var(--bg-color-two);
  }

  &.active {
    border-bottom: 2px solid var(--bg-color-six);
    color: var(--main-text-color);
  }
  
  &.submit_button {
    background-color: var(--bg-color-six);
    width: 20vw;
    min-width: 100px;
    border-radius: 15px;
    margin-top: 30px;
    cursor: pointer;
    margin-left: 0;
  }

  
  
`;