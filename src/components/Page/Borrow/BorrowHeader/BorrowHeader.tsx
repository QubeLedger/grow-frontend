import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { BorrowCustomLink } from "../BorrowCustomLink/BorrowCustomLink";
import { useState } from "react";
import { BorrowFields } from "../BorrowFields/BorrowFields";
import { BorrowInfo } from "../BorrowInfo/BorrowInfo";
import { BorrowConfirm } from "../../../Buttton/BorrowConfirm/BorrowConfirm";
import { RepayField } from "../../Repay/RepayField/RepayField";
import { RepayInfo } from "../../Repay/RepayInfo/RepayInfo";
import { RepayConfirm } from "../../../Buttton/RepayConfirm/RepayConfirm";

const Header = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
`

const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const ButtonLink = styled.button <{ TextColor: string }>`
    max-width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    outline: none;
    margin-left: 12px;
    font-family: 'Inter', sans-serif;
    transition: all .3s ease-in-out;
    color: ${props => props.TextColor};
`


export const BorrowHeader = () => {

    const [theme, setTheme] = useToggleTheme()
    const [block, setBlock] = useState('borrow')

    const greyText: string = "rgba(160, 160, 160, 1)"
    const underline: string = "underline 2px solid rgba(87, 187, 242, 1)"

    const BorrowContainer = <>
        <BorrowFields />
        <BorrowInfo />
        <BorrowConfirm /></>

    const RepayContainer = <>
        <RepayField />
        <RepayInfo />
        <RepayConfirm />
    </>

    return (
        <Header>
            <ButtonBlock>
                <ButtonLink TextColor={theme.TextColor}
                    onClick={() => { setBlock('borrow') }}
                    style={{
                        color: block == 'borrow' ? theme.TextColor = theme.active == true ? 'white' : 'black' : greyText,
                        textDecoration: block == 'borrow' ? underline : ''
                    }}>Borrow</ButtonLink>
                <ButtonLink TextColor={theme.TextColor}
                    onClick={() => { setBlock('repay') }}
                    style={{
                        color: block == 'repay' ? theme.TextColor = theme.active == true ? 'white' : 'black' : greyText,
                        textDecoration: block == 'repay' ? underline : ''
                    }}>Repay</ButtonLink>
            </ButtonBlock>
            <div>
                {block == 'borrow' && BorrowContainer}
                {block == 'repay' && RepayContainer}
            </div>
        </Header>
    )
}