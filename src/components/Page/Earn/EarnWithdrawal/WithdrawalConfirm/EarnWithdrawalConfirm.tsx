import styled from "styled-components";
import { Coin, useBalancesStore } from "../../../../../hooks/useBalanceStore";
import { useWallet } from "../../../../../hooks/useWallet";
import { useAmountDepositEarnStore, useAmountWithdrawalEarnStore } from "../../../../../hooks/useAmountInStore";
import { useShowWalletModal } from "../../../../../hooks/useShowModal";
import { TOKEN_INFO } from "../../../../../constants";
import { WithdrawalLend } from "../../../../../functions/lend";
import { useClient } from "../../../../../hooks/useClient";
import { useLendStore } from "../../../../../hooks/usePositionStore";

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
    margin-top: 35px;
`

export const EarnWithdrawalConfirm = () => {

    const [wallet, _ ] = useWallet();
    const [amtIn, setAmountWithdrawalEarnStore] = useAmountWithdrawalEarnStore()
    const [walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [client, setClient] = useClient();
    const [ lends, setLends ] = useLendStore()

    let temp_token = TOKEN_INFO.find((token) => token.Base == amtIn.base )
    let temp_lend = lends.find((lend) => lend.amountIn_denom == temp_token?.Denom)
    let Button;

    if (wallet.init == false) {
        Button = <ButtonBlock onClick={() => {setWalletModalStatus({b: true})}}>
                <ConfirmButton>Connect wallet</ConfirmButton>
            </ButtonBlock>
    } else {
        if (amtIn.amt == '' || amtIn.amt == '0' || isNaN(Number(amtIn.amt))) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Enter {amtIn.base} amount</InsufficientConfirmButton>
            </ButtonBlock>
        } else if (temp_lend === undefined) { 
            Button = <ButtonBlock>
                <InsufficientConfirmButton>No {amtIn.base} deposit</InsufficientConfirmButton>
            </ButtonBlock>
        } else if (Number(amtIn.amt) > (Number(temp_lend?.amountIn_amount) / 10**6)) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Insufficient {amtIn.base} balance</InsufficientConfirmButton>
            </ButtonBlock>
        } else {
            Button = <ButtonBlock>
                <ConfirmButton onClick={() => {WithdrawalLend(amtIn, wallet, client)}}>Confirm</ConfirmButton>
            </ButtonBlock>
        }
    }

    return(
        <>{Button}</>
    )
}