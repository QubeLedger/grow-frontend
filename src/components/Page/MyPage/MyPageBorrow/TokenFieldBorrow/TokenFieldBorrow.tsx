import styled from "styled-components";
import USQLogo from '../../../../../assets/svg/USQLogo.webp'
import ATOMLogo from '../../../../../assets/svg/AtomLogo.webp'
import WBTCLogo from '../../../../../assets/svg/WBTCLogo.webp'
import GUSQLogo from '../../../../../assets/svg/GUSQLogo.webp'
import { EarnCastomLink } from "../../../Earn/EarnCastomLink/EarnCastomLink";
import { useMediaQuery } from "react-responsive";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const FieldArrS = styled.div`
    overflow: auto;
    overflow-x: visible;
    height: 400px;
    scrollbar-color: rgba(87, 187, 242, 1) transparent;
    scrollbar-width: thin;
`

const FieldArr = styled.div`
    overflow: visible;
`

const FieldBlock = styled.div <{BorderField: string}>`
    width: 99%;
    height: 60px;
    border: 2px solid red;
    border-radius: 17px;
    margin-top: 10px;
    font-family: 'Inter', sans-serif;
    border: ${props => props.BorderField};
    display: flex;
    align-items: center;
`

const TokenImg = styled.img`
    width: 45px;
    margin-left: 15px;
`

const PriceBlock = styled.div <{TextColor: string}>`
    margin-left: auto;
    white-space: nowrap;
    text-align: left;
    color: ${props => props.TextColor};
`

const PriceText = styled.a`
    font-size: 20px;
    font-weight: 700;
    text-align: left;
`

const TokenName = styled.a <{TextColor: string}>` 
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    color: ${props => props.TextColor};
`

const ButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -5px;
    margin-right: 15px;
`

const EarnDepositButton = styled.button `
    width: 130px;
    height: 100%;
    color: white;
    border: none;
    border-radius: 50px;
    background: linear-gradient(to right, #3B9CFC, #6CBBFF);
    margin-right: 5px;
    margin-top: 5px;
    padding: 5px 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    cursor: pointer;
`

const EarnWithdrawalButton = styled.button`
    width: 130px;
    height: 100%;
    color: #3B9CFC;
    border: 2px solid #3B9CFC;
    border-radius: 50px;
    background:transparent;
    margin-left: 5px;
    margin-top: 5px;
    padding: 5px 15px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    cursor: pointer;
`


export const TokenFieldBorrow = () => {

    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 570px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 570px)",
    });

    var button = <ButtonsBlock >
                    <EarnCastomLink to="/borrow">
                        <EarnDepositButton>Manage</EarnDepositButton>
                    </EarnCastomLink>
                </ButtonsBlock>

    return(
        <FieldArr>
            <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={USQLogo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>USQ</TokenName>
            {isDes && <PriceBlock TextColor={theme.TextColor} style={{marginRight: "auto"}}> <PriceText>1 USQ</PriceText> </PriceBlock>}
            {isMob && <PriceBlock TextColor={theme.TextColor} style={{marginRight: "15px"}}> <PriceText>1 USQ</PriceText> </PriceBlock>}
            {isDes && button}
            {isMob && <></>}
            </FieldBlock>
        </FieldArr>
    )
}