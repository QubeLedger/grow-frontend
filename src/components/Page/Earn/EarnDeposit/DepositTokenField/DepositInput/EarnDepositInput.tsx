import styled from "styled-components";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";
import { useAmountDepositEarnStore } from "../../../../../../hooks/useAmountInStore";
import { FormEvent } from "react";
import { useParams } from "react-router";

const Input = styled.input <{inputTextColor: string}>`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 21px;
    color: ${props => props.inputTextColor};
    outline: none;
    margin-left: 10px;
    background: transparent;
`


export const EarnDepositInput = () => {
    let { denom } = useParams()  

    const [theme, setTheme] = useToggleTheme()

    const [amtIn, setAmountDepositEarnStore] = useAmountDepositEarnStore()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmountDepositEarnStore(
                {
                    amt: "",
                    base: denom == undefined? "" : denom,
                }
            );
        } else {
            setAmountDepositEarnStore(
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