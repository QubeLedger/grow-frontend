import styled from "styled-components";
import { EarnCustomLink } from "../../../Earn/EarnCustomLink/EarnCustomLink";
import { useMediaQuery } from "react-responsive";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useLendStore } from "../../../../../hooks/usePositionStore";
import { TOKEN_INFO } from "../../../../../constants";
import { TokenBalance } from "../../MyPageBalance/TokenFieldBalance/TokenFieldsBalance";
import { useAccordionEarn } from "../../../../../hooks/useAccordionEarn";

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
    border-radius: 50px;
`

const PriceBlock = styled.div <{TextColor: string}>`
    max-width: 100%;
    margin-left: 40px;
    white-space: nowrap;
    text-align: left;
    color: ${props => props.TextColor};
    @media (max-width: 570px) {
        margin-left: auto;
    }
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
    margin-left: auto;
`

const EarnDepositButton = styled.button`
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

export function myFixed(x: number, d: number) {
    if (!d) return x.toFixed(d); // don't go wrong if no decimal
    return x.toFixed(d).replace(/\.?0+$/, '');
}

export const TokenFieldDeposit = () => {

    const [ theme, setTheme ] = useToggleTheme()
    const [ lend, setLend ] = useLendStore();

    const isDes = useMediaQuery({
        query: "(min-device-width: 570px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 570px)",
    });

    let temp_lend = lend

    temp_lend.sort(function(a, b) {
        return b.Amount - a.Amount
    });

    temp_lend = temp_lend.filter((e) => e.Display != "")
    
    
    let ComponentLends = temp_lend.map((lend) => 
        <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={lend.Logo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>{lend.Display}</TokenName>
            {isDes && <PriceBlock TextColor={theme.TextColor}> <PriceText>{myFixed(lend.Amount, 3)} {lend.Display}</PriceText> </PriceBlock>}
            {isMob && <PriceBlock TextColor={theme.TextColor} style={{marginRight: "12px"}}> <PriceText>{myFixed(lend.Amount, 6)} {lend.Display}</PriceText> </PriceBlock>}
            {isDes &&   
                <ButtonsBlock>
                    <EarnCustomLink to={`/earn`}>
                        <EarnDepositButton>Manage</EarnDepositButton>
                    </EarnCustomLink>
                    {/* <EarnCustomLink to={`/withdrawal/${lend.Display}`}>
                        <EarnWithdrawalButton>Withdrawal</EarnWithdrawalButton>
                    </EarnCustomLink> */}
                </ButtonsBlock>
            }
            {isMob && <></>}
        </FieldBlock>
    )
    return (
        <FieldArr>
            {ComponentLends}
        </FieldArr>
    )
}