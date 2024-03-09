import styled from "styled-components";
import { ModalWant } from "../../../../Modal/BorrowModal/ModalWant/ModalWant";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useAmountBorrowEarnStore, useAmountBorrowInfoStore } from "../../../../../hooks/useAmountInStore";
import { FormEvent } from "react";

const Want = styled.div`
    width: 90%;
    height: 60px;
`

const TextWant = styled.div `
    font-size: 15px;
    color: #BABABA;
    font-weight: 700;
    margin-bottom: 10px;
`

const FieldWant = styled.div <{BorderField: string}>`
    width: 100%;
    height: 100%;
    border: ${props => props.BorderField};
    border-radius: 20px;
    display: flex;
    align-items: center;
`

const TokenBlock = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
`

const InputBlock = styled.input`
    width: 50%;
    outline: none;
    text-align: right;
    font-size: 25px;
    font-weight: 400;
    color: #969696;
    border: none;
    border-radius: 20px;
    padding-right: 10px;
    margin-left: auto;
    background: transparent;
`


export const WantTo = () => {
    
    const [theme, setTheme] = useToggleTheme();
    const [ borrow_info, setBorrowInfo ] = useAmountBorrowInfoStore()
    const [ amtIn, setAmountBorrowEarnStore ] = useAmountBorrowEarnStore()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmountBorrowEarnStore(
                {
                    amt: "",
                    base: borrow_info.denom == undefined? "" : borrow_info.denom,
                }
            );
        } else {
            setAmountBorrowEarnStore(
                {
                    amt: e.currentTarget.value,
                    base: borrow_info.denom == undefined? "" : borrow_info.denom,
                }
            );
        }
    };

    return(
        <Want>
            <TextWant>I want to borrow</TextWant>
            <FieldWant BorderField={theme.BorderField}>
                <TokenBlock>
                    <ModalWant/>
                </TokenBlock>
                <InputBlock placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></InputBlock>          
            </FieldWant>
        </Want>
    )
}