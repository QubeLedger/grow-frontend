import { useState } from "react";
import styled from "styled-components";
import { MyPageBalance } from "../MyPageBalance/MyPageBalance";
import { MyPageDeposit } from "../MyPageDeposit/MyPageDeposit";
import { MyPageBorrow } from "../MyPageBorrow/MyPageBorrow";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const HeaderBlock = styled.div`
    width: 100%;
    margin-top: 30px;
`

const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 570px) {
        justify-content: space-around;
    }
`

const ButtonLink = styled.button <{TextColor: string}>`
    max-width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    outline: none;
    font-family: 'Inter', sans-serif;
    margin-left: 20px;
    transition: all .3s ease-in-out;
    color: ${props => props.TextColor};
    @media (max-width: 500px) {
        font-size: 25px;
    }
    @media (max-width: 400px) {
        font-size: 20px;
        margin-left: 0;
    }
`

const DynamicUndeBlock = styled.div`
    width: 100%;
    border: 1px solid rgba(87, 187, 242, 1);
    border-radius: 20px;
    margin-top: 10px;
`


export const MyPageHeader = () => {

    const [block, setBlock] = useState('Balance')
    const [theme, setTheme] = useToggleTheme()

    const greyText: string = "rgba(192, 192, 192, 1)"
    const underline: string = "underline 2px solid rgba(87, 187, 242, 1)"
    
    return(
        <HeaderBlock>
            <ButtonBlock>
                <ButtonLink TextColor={theme.TextColor}
                onClick={() => {setBlock('Balance')}}
                style={{marginLeft: "0",
                    color: block == 'Balance' ? theme.TextColor = theme.active == true ? 'white' : 'black' : greyText,
                    textDecoration: block == 'Balance' ? underline : ''
                }}>Balance</ButtonLink>
                <ButtonLink TextColor={theme.TextColor}
                onClick={() => {setBlock('Deposit')}} 
                style={{
                    color: block == 'Deposit' ? theme.TextColor = theme.active == true ? 'white' : 'black' : greyText,
                    textDecoration: block == 'Deposit' ? underline : ''
                }}>Deposit</ButtonLink>
                <ButtonLink TextColor={theme.TextColor}
                onClick={() => {setBlock('Borrow')}} 
                style={{
                    color: block == 'Borrow' ? theme.TextColor = theme.active == true ? 'white' : 'black' : greyText,
                    textDecoration: block == 'Borrow' ? underline : ''
                }}>Borrow</ButtonLink>
            </ButtonBlock>
            <DynamicUndeBlock></DynamicUndeBlock>
            <div>
                {block == 'Balance' && <MyPageBalance/>}
                {block == 'Deposit' && <MyPageDeposit/>}
                {block == 'Borrow' && <MyPageBorrow/>}
            </div>
        </HeaderBlock>
    )
}