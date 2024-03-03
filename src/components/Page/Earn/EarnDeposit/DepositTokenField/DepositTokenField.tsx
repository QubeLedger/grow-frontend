import styled from "styled-components";
import { EarnDepositInput } from "./DepositInput/EarnDepositInput";
import { EarnDepositToken } from "./DepositToken/EarnDepositToken";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useAmountDepositEarnStore } from "../../../../../hooks/useAmountInStore";
import { Coin, useBalancesStore } from "../../../../../hooks/useBalanceStore";
import { TOKEN_INFO } from "../../../../../constants";
import { useWallet } from "../../../../../hooks/useWallet";

const FieldBlock = styled.div`
    width: 100%;
`

const TokenBlock = styled.div <{BorderField: string}>`
    height: 100%;
    border: ${props => props.BorderField};
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 15px 0px;
`

const TokenText = styled.a`
    color: #BABABA;
    font-size: 15px;
    font-weight: 700;
`

const AmountButton = styled.button`
    max-width: 100%;
    max-height: 100%;
    background: transparent;
    border: 2px solid #3B9CFC;
    display: flex;
    color: #3B9CFC;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
`

const getBalance = (balances: Array<Coin>, denom: string) => {
    let res: string = "0";
    balances.map((coin) => {
        if(coin.denom == denom) {
            res = coin.amt;
        }
    })
    return (Number(res) / 10 ** 6).toFixed(3) == "0.000" ? "0" : (Number(res) / 10 ** 6).toFixed(3)
}

export const EarnDepositTokenField = () => {
    const [wallet, _ ] = useWallet();
    const [theme, setTheme] = useToggleTheme()
    const [amtIn, setAmountDepositEarnStore] = useAmountDepositEarnStore()
    const [balances, setBalances] = useBalancesStore();

    let temp_token = TOKEN_INFO.find((token) => token.Base == amtIn.base )
    let balance = getBalance(balances, String(temp_token?.Denom))

    const SetMaxValue = async () => {
        if (wallet.init != false) {
            setAmountDepositEarnStore(
                {
                    amt: balance,
                    base: amtIn.base,
                }
            );
        }
    }

    return(
        <FieldBlock>
            <TokenText>I want to deposit</TokenText>
            <TokenBlock BorderField={theme.BorderField}>
                <EarnDepositToken/>
                <EarnDepositInput/>
                <AmountButton onClick={SetMaxValue}>MAX</AmountButton>
            </TokenBlock>
        </FieldBlock>
    )
}