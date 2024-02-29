import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";
import React from "react";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    width: 100%;
    text-decoration: none;
    font-weight: 700;
    outline: none;
    font-size: 17px;
    padding: 10px 20px;
    @media (max-width: 930px) {
        font-size: 17px;
    }
    @media (max-width: 730px) {
        font-size: 15px;
        padding: 8px 20px;
    }
`

interface Props {
    to: string;
    children: ReactNode;
}

export const CastomButtonlink = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: '#000',
            transition: '.2s ease-in-out'
        }}
        >
            {children}
        </LinkBLock>
    )
}