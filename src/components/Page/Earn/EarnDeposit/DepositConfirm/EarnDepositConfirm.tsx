import styled from "styled-components";
import { useAmountDepositEarnStore } from "../../../../../hooks/useAmountInStore";
import { useWallet } from "../../../../../hooks/useWallet";
import { useShowTransactionModalDeposit, useShowWalletModal } from "../../../../../hooks/useShowModal";
import { Coin, useBalancesStore } from "../../../../../hooks/useBalanceStore";
import { TOKEN_INFO } from "../../../../../constants";
import { CreateLend } from "../../../../../functions/lend";
import { useClient } from "../../../../../hooks/useClient";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { Modal } from "../../../../Modal/Modal";
import { DepositModal } from "../../../../Modal/DepositPageModal/ConfirmModal";

const ConfirmButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 19px;
    font-weight: 700;
    background: linear-gradient(to right, #6db8ff, #0089ff);
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
    width: 100%;
    height: 50px;
    font-size: 19px;
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
    const [ShowTransactionModalDeposit, setShowTransactionModalDeposit] = useShowTransactionModalDeposit();
    const [theme, setTheme] = useToggleTheme();

    const open = () => { setShowTransactionModalDeposit({ b: true, isPending: ShowTransactionModalDeposit.isPending, status: "" }) };
    const close = () => { setShowTransactionModalDeposit({ b: false, isPending: false, status: "" }) };
        
    let Button;

    let temp_token = TOKEN_INFO.find((token) => token.Base == amtIn.base );
    let balance = getBalance(balances, String(temp_token?.Denom));

    const ModalComponent = Modal(
        ShowTransactionModalDeposit.b,
        close,
        DepositModal(
            theme.TextColor,
            temp_token?.Logo? temp_token?.Logo : "",
            temp_token?.Base? temp_token?.Base : "",
            amtIn.amt,
            amtIn,
            wallet,
            client,
            close,
        ),
        theme.modalBgColor,
        theme.modalBorder
    )

    if (wallet.init == false) {
        Button = <ButtonBlock onClick={() => {setWalletModalStatus({b: true})}}>
                <ConfirmButton>Connect wallet</ConfirmButton>
            </ButtonBlock>
    } else {
        if (amtIn.amt == '' || amtIn.amt == '0' || isNaN(Number(amtIn.amt))) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Enter {amtIn.base} amount</InsufficientConfirmButton>
            </ButtonBlock>
        } else if (Number(amtIn.amt) > Number(balance)) {
            Button = <ButtonBlock>
                <InsufficientConfirmButton>Insufficient {amtIn.base} balance</InsufficientConfirmButton>
            </ButtonBlock>
        } else {
            Button = <>
                <ButtonBlock>
                    <ConfirmButton onClick={open}>Confirm</ConfirmButton>
                </ButtonBlock>
                {ModalComponent}
            </>
        }
    }

    return(
        <>{Button}</>
    )
}