import styled from "styled-components";

const ConfirmButton = styled.button`
    width: 260px;
    height: 37px;
    font-size: 17px;
    font-weight: 700;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin: 0 auto;
    border-radius: 12px;
    cursor: pointer;
    color: black;
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 35px;
`


export const EarnWithdrawalConfirm = () => {
    return(
        <ButtonBlock>
            <ConfirmButton>Confirm</ConfirmButton>
        </ButtonBlock>
    )
}