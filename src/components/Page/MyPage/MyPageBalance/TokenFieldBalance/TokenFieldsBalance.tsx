import styled from "styled-components";
import USQLogo from '../../../../../assets/svg/USQLogo.webp'
import ATOMLogo from '../../../../../assets/svg/AtomLogo.webp'
import WBTCLogo from '../../../../../assets/svg/WBTCLogo.webp'
import GUSQLogo from '../../../../../assets/svg/GUSQLogo.webp'
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useBalancesStore } from "../../../../../hooks/useBalanceStore";
import { TOKEN_INFO } from "../../../../../constants/tokens";

export interface TokenBalance {
    Display: string,
    Logo: string,
    Amount: number,
    Price: number,
}

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
    margin-right: auto;
    text-align: left;
    width: 100px;
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

const AmountBlock = styled.div <{TextColor: string}>`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    text-align: right;
    margin-right: 15px;
    color: ${props => props.TextColor};
`

const MainAmountText = styled.a`
    font-size: 20px;
    font-weight: 700;
`

const SecondAmountText = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: rgba(192, 192, 192, 1);
`



export const TokenFieldBalanceDesktop = () => {

    const [theme, setTheme] = useToggleTheme();
    const [balances, setBalances ] = useBalancesStore();

    let temp_balance: TokenBalance[] = []

    balances.map((balance_token) => {
        TOKEN_INFO.map((token) => {
            if(balance_token.denom == token.Denom) {
                temp_balance.push({
                    Display: token.Base,
                    Amount: (Number(balance_token.amt) / 10 ** Number(token.Decimals)),
                    Logo: token.Logo,
                    Price: 1
                })
            }
        })
    })

    temp_balance.sort((a, b) => b.Price - a.Price)

    const Balances = temp_balance.map((balance) => 
        <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={balance.Logo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>{balance.Display}</TokenName>
            <PriceBlock TextColor={theme.TextColor}>
                <PriceText>{balance.Price} USQ</PriceText>
            </PriceBlock>
            <AmountBlock TextColor={theme.TextColor}>
                <MainAmountText>{balance.Amount.toFixed(1)} {balance.Display}</MainAmountText>
                <SecondAmountText>{(balance.Amount * balance.Price).toFixed(1)} USQ</SecondAmountText>
            </AmountBlock>
        </FieldBlock>
    )

    return(
        <FieldArr>
            {Balances}
        </FieldArr>
    )
}

export const TokenFieldBalanceMobile = () => {

    const [theme, setTheme] = useToggleTheme()
    let temp_balance: TokenBalance[] = []
    const [balances, setBalances ] = useBalancesStore();

    balances.map((balance_token) => {
        TOKEN_INFO.map((token) => {
            if(balance_token.denom == token.Denom) {
                temp_balance.push({
                    Display: token.Base,
                    Amount: (Number(balance_token.amt) / 10 ** Number(token.Decimals)),
                    Logo: token.Logo,
                    Price: ((Number(balance_token.amt) / 10 ** Number(token.Decimals)) * 1)
                })
            }
        })
    })

    temp_balance.sort(function(a, b) {
        return b.Price - a.Price
    });

    const Balances = temp_balance.map((balance) => 
        <FieldBlock BorderField={theme.BorderField}>
            <TokenImg src={balance.Logo}></TokenImg>
            <TokenName TextColor={theme.TextColor}>{balance.Display}</TokenName>
            {/*<PriceBlock TextColor={theme.TextColor}>
                <PriceText>{balance.Price} USQ</PriceText>
            </PriceBlock>*/}
            <AmountBlock TextColor={theme.TextColor} style={{marginLeft: "auto"}}>
                <MainAmountText>{balance.Amount.toFixed(1)} {balance.Display}</MainAmountText>
                <SecondAmountText>{balance.Price.toFixed(1)} USQ</SecondAmountText>
            </AmountBlock>
        </FieldBlock>
    )

    return(
        <FieldArr>
            {Balances}        
        </FieldArr>
    )
}