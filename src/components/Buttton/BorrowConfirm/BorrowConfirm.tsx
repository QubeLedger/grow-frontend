import styled from "styled-components";

const Button = styled.button`
    width: 250px;
    height: 40px;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin-top: 30px;
    border-radius: 10px;
    cursor: pointer;
`

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ButtonText = styled.a`
    font-weight: 700;
    font-size: 18px;
    color: black;
`

export const BorrowConfirm = () => {
    return(
        <ButtonBlock>
            <Button>
                <ButtonText>Confirm</ButtonText>
            </Button>
        </ButtonBlock>
    )
}