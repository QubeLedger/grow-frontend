import styled from "styled-components";
import { EarnWithdrawalInput } from "./WithdrawalInput/EarnWithdrawalInput";
import { EarnWithdrawalToken } from "./WithdrawalToken/EarnWithdrawalToken";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { TOKEN_INFO } from "../../../../../constants";
import { useAmountWithdrawalEarnStore } from "../../../../../hooks/useAmountInStore";
import { useLendStore } from "../../../../../hooks/usePositionStore";
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

export const EarnWithdrawalTokenField = () => {
    
    const [ theme, setTheme ] = useToggleTheme()
    const [ amtIn, setAmountWithdrawalEarnStore ] = useAmountWithdrawalEarnStore()
    const [ lends, setLends ] = useLendStore()
    const [ wallet, setWallet ] = useWallet();

    let temp_token = TOKEN_INFO.find((token) => token.Base == amtIn.base )
    let temp_lend = lends.find((lend) => lend.amountIn_denom == temp_token?.Denom)

    const SetMaxValue = async () => {
        if (wallet.init != false) {
            setAmountWithdrawalEarnStore(
                {
                    amt: (Number(temp_lend?.amountIn_amount) / 10 ** 6).toFixed(3) == "0.000" ? "0" : (Number(temp_lend?.amountIn_amount) / 10 ** 6).toFixed(3),
                    base: amtIn.base,
                }
            );
        }
    }

    return(
        <FieldBlock>
            <TokenText>I want to deposit</TokenText>
            <TokenBlock BorderField={theme.BorderField}>
                <EarnWithdrawalToken/>
                <EarnWithdrawalInput/>
                <AmountButton onClick={SetMaxValue}>MAX</AmountButton>
            </TokenBlock>
        </FieldBlock>
    )
}