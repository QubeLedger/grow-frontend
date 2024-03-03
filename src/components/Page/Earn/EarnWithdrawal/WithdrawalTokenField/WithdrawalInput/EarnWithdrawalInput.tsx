import styled from "styled-components";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";
import { useAmountWithdrawalEarnStore } from "../../../../../../hooks/useAmountInStore";
import { FormEvent } from "react";
import { useParams } from "react-router";

const Input = styled.input <{inputTextColor: string}>`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 20px;
    color: ${props => props.inputTextColor};
    outline: none;
    margin-left: 10px;
    background: transparent;
`


export const EarnWithdrawalInput = () => {

    let { denom } = useParams()  

    const [theme, setTheme] = useToggleTheme()

    const [amtIn, setAmountWithdrawalEarnStore] = useAmountWithdrawalEarnStore()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmountWithdrawalEarnStore(
                {
                    amt: "",
                    base: denom == undefined? "" : denom,
                }
            );
        } else {
            setAmountWithdrawalEarnStore(
                {
                    amt: e.currentTarget.value,
                    base: denom == undefined? "" : denom,
                }
            );
        }
    };

    return(
            <Input inputTextColor={theme.inputTextColor} placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></Input>
    )
}