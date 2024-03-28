import { Wallet } from "../hooks/useWallet";
import { Client } from "../hooks/useClient";
import { MakeCreateLendMsg, MakeWithdrawalLendMsg } from "./msg/grow/lend";
import { AmountIn } from "../hooks/useAmountInStore";


export async function CreateLend(amtIn: AmountIn, wallet: Wallet, client: Client)  {
        try {
                let msg = await MakeCreateLendMsg(amtIn, wallet)

                if(client.init == true) {
                        const result = await client.client.signAndBroadcast(
                                client.accounts[0].address,
                                [msg],
                                "auto",
                        );
                        if (result.code !== undefined && result.code !== 0) {
                                console.log("Failed to send tx: " + result.log || result.rawLog);   
                        } else {
                                console.log("Succeed to send tx:" + result.transactionHash);
                        }
                }
        } catch(e) {
                console.log(e)
        }
}

export async function WithdrawalLend(amtIn: AmountIn, wallet: Wallet, client: Client) {
        try {
                let msg = await MakeWithdrawalLendMsg(amtIn, wallet)

                if(client.init == true) {
                        const result = await client.client.signAndBroadcast(
                                client.accounts[0].address,
                                [msg],
                                "auto",
                        );
                        if (result.code !== undefined && result.code !== 0) {
                                console.log("Failed to send tx: " + result.log || result.rawLog);

                                
                        } else {
                                console.log("Succeed to send tx:" + result.transactionHash);
                        }
                }
        } catch(e) {
                console.log(e)
        }
}