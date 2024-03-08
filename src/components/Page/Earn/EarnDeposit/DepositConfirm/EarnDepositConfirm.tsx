import styled from "styled-components";
import { useAmountDepositEarnStore } from "../../../../../hooks/useAmountInStore";
import { useWallet } from "../../../../../hooks/useWallet";
import { useShowWalletModal } from "../../../../../hooks/useShowModal";
import { Coin, useBalancesStore } from "../../../../../hooks/useBalanceStore";
import { TOKEN_INFO } from "../../../../../constants";
import { CreateLend } from "../../../../../functions/lend";
import { useClient } from "../../../../../hooks/useClient";

const ConfirmButton = styled.button`
    width: 260px;
    height: 40px;
    font-size: 17px;
    font-weight: 700;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: black;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const InsufficientConfirmButton = styled.button`
    width: 260px;
    height: 40px;
    font-size: 17px;
    font-weight: 700;
    background: #757575;
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: black;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
`

export const getBalance = (balances: Array<Coin>, denom: string) => {
    let res: string = "0";
    balances.map((coin) => {
        if(coin.denom == denom) {
            res = coin.amt;
        }
    })
    return (Number(res) / 10 ** 6).toFixed(3) == "0.000" ? "0" : (Number(res) / 10 ** 6).toFixed(3)
}


export const EarnDepositConfirm = () => {
    const [wallet, _ ] = useWallet();
    const [amtIn, setAmountDepositEarnStore] = useAmountDepositEarnStore()
    const [walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [balances, setBalances] = useBalancesStore();
    const [client, setClient] = useClient();
        
    let Button;

    let temp_token = TOKEN_INFO.find((token) => token.Base == amtIn.base )
    let balance = getBalance(balances, String(temp_token?.Denom))

    if (wallet.init == false) {
        Button = <ButtonBlock onClick={() => {setWalletModalStatus({b: true})}}>
                <ConfirmButton>Connect wallet</ConfirmButton>
            </ButtonBlock>
    } else {
        if (amtIn.amt == '' || amtIn.amt == '0') {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Enter {amtIn.base} amount</InsufficientConfirmButton>
            </ButtonBlock>
        } else if (Number(amtIn.amt) > Number(balance)) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Insufficient {amtIn.base} balance</InsufficientConfirmButton>
            </ButtonBlock>
        } else {
            Button = <ButtonBlock>
                <ConfirmButton onClick={() => {CreateLend(amtIn, wallet, client)}}>Confirm</ConfirmButton>
            </ButtonBlock>
        }
    }

    return(
        <>{Button}</>
    )
}