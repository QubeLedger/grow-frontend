import styled from "styled-components";
import { CastomButtonlink } from "../../CustomButtonLink/CustomButtonLink";

const Button = styled.button`
    width: 175px;
    height: 40px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    margin-left: 20px;
    border-radius: 50px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    display: flex;
    transition: 0.2s all;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    } 
    @media (max-width: 500px) {
        width: 120px;
        height: 35px;
        margin-left: 10px;
    }
`

export const BorrowButton = () => {
    return(
        <Button>
            <CastomButtonlink to="/Borrow">Borrow</CastomButtonlink>
        </Button>
    )
}