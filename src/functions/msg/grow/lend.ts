import { Wallet, useWallet } from "../../../hooks/useWallet";
import { 
        typeUrlMsgMsgCreateLend,
        typeUrlMsgWithdrawalLend,
        MsgCreateLend,
        MsgWithdrawalLend,
} from "../../../constants/cosmos/proto/grow/tx";
import { AmountIn, useAmountDepositEarnStore, useAmountWithdrawalEarnStore } from "../../../hooks/useAmountInStore";
import { TOKEN_INFO } from "../../../constants";

interface Msg {
        typeUrl: string
        value: any
}


export function MakeCreateLendMsg(amtIn: AmountIn, wallet: Wallet): Msg {
        
        let denom = TOKEN_INFO.find((token) => token.Base == amtIn.base)

        let Msg: MsgCreateLend = {
                depositor: wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32Address : "",
                amountIn: (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)).toFixed(0) + String(denom?.Denom),
        };

        let msg: Msg = {
            typeUrl: typeUrlMsgMsgCreateLend,
            value: Msg,
        };

        return msg
}

export function MakeDeleteLendMsg(): Msg {
        const [amtIn, _] = useAmountWithdrawalEarnStore()
        const [wallet, setWallet] = useWallet()
        
        let denom = TOKEN_INFO.find((token) => token.Base == amtIn.base)


        let Msg: MsgWithdrawalLend = {
                depositor: wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32.bech32Address : "",
                amountIn: amtIn.amt + String(denom),
                denomOut: String(denom)
        };

        let msg: Msg = {
            typeUrl: typeUrlMsgWithdrawalLend,
            value: Msg,
        };

        return msg
}