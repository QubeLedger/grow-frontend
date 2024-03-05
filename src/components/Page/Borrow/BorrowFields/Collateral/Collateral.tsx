import styled from "styled-components";
import { ModalColl } from "../../../../Modal/BorrowModal/ModalColl.tsx/ModalColl";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useAmountCollateralEarnStore, useAmountCollateralInfoStore } from "../../../../../hooks/useAmountInStore";
import { FormEvent } from "react";

const Coll = styled.div`
    width: 90%;
    height: 60px;
    margin-top: 60px;
`

const TextColl = styled.div`
    font-size: 15px;
    color: #BABABA;
    font-weight: 700;
    margin-bottom: 10px;
`

const FieldCool = styled.div <{BorderField: string}>`
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


export const Collateral = () => {
        
    const [ theme, setTheme ] = useToggleTheme()
    const [ collateral_info, setCollateralInfo ] = useAmountCollateralInfoStore()
    const [ amtIn, setAmountCollateralEarnStore ] = useAmountCollateralEarnStore()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value == undefined) {
            setAmountCollateralEarnStore(
                {
                    amt: "",
                    base: collateral_info.denom == undefined? "" : collateral_info.denom,
                }
            );
        } else {
            setAmountCollateralEarnStore(
                {
                    amt: e.currentTarget.value,
                    base: collateral_info.denom == undefined? "" : collateral_info.denom,
                }
            );
        }
    };
    
    return(
        <Coll>
            <TextColl>Collateral</TextColl>
            <FieldCool BorderField={theme.BorderField}>
                <TokenBlock>
                    <ModalColl/>
                </TokenBlock>
                <InputBlock placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></InputBlock>  
            </FieldCool>
        </Coll>
    )
}