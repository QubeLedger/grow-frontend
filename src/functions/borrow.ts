import { Wallet } from "../hooks/useWallet";
import { Client } from "../hooks/useClient";
import { AmountIn } from "../hooks/useAmountInStore";
import { MakeCreateBorrowMsg, MakeDeleteBorrowMsg } from "./msg/grow/borrow";


export async function CreateBorrow(amtIn: AmountIn, wallet: Wallet, client: Client): Promise<string> {
        try {
                let msg = await MakeCreateBorrowMsg(amtIn, wallet)

                if(client.init == true) {
                        const result = await client.client.signAndBroadcast(
                                client.accounts[0].address,
                                [msg],
                                "auto",
                        );
                        if (result.code !== undefined && result.code !== 0) {
                                console.log("Failed to send tx: " + result.log || result.rawLog);
                                return "Failed"
                        } else {
                                console.log("Succeed to send tx:" + result.transactionHash);
                                return "Succeed"
                        }
                }
        } catch(e) {
                console.log(e)
                return "Error"
        }
        return "Error"
}

export async function DeleteBorrow(amtIn: AmountIn, wallet: Wallet, client: Client): Promise<string>  {
        try {
                let msg = await MakeDeleteBorrowMsg(amtIn, wallet)

                if(client.init == true) {
                        const result = await client.client.signAndBroadcast(
                                client.accounts[0].address,
                                [msg],
                                "auto",
                        );
                        if (result.code !== undefined && result.code !== 0) {
                                console.log("Failed to send tx: " + result.log || result.rawLog);
                                return "Failed"
                        } else {
                                console.log("Succeed to send tx:" + result.transactionHash);
                                return "Succeed"
                        }
                }
        } catch(e) {
                console.log(e)
                return "Error"
        }
        return "Error"
}