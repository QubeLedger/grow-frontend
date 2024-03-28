import styled from "styled-components";
import { CastomButtonlink } from "../../CustomButtonLink/CustomButtonLink";

const Button = styled.button`
    width: 175px;
    height: 40px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    margin-right: 20px;
    border-radius: 50px;
    border: none;
    font-size: 17px;
    font-weight: 700;
    color: #fff;
    display: flex;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
    @media (max-width: 500px) {
        width: 120px;
        height: 35px;
        margin-right: 10px;
    }
`

export const EarnButton = () => {
    return(
        <Button>
            <CastomButtonlink  to="/Earn">Earn</CastomButtonlink>
        </Button>
    )
}