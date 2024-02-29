import styled from "styled-components";
import { BorrowHeader } from "../BorrowHeader/BorrowHeader";
import { BorrowFields } from "../BorrowFields/BorrowFields";
import { BorrowInfo } from "../BorrowInfo/BorrowInfo";
import { BorrowConfirm } from "../../../Buttton/BorrowConfirm/BorrowConfirm";

const Contrainer = styled.div`
    width: 400px;
    height: 500px;
`

export const BorrowContainer = () => {
    return(
        <Contrainer>
            <BorrowHeader/>
            <BorrowFields/>
            <BorrowInfo/>
            <BorrowConfirm/>
        </Contrainer>
    ) 
}