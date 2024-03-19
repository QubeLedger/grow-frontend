import styled from "styled-components";
import { ConnectModal } from "../../Modal/ConnectModal/ConnectModal";

const ButtonBlock = styled.div`
    max-width: 100%;
    height: 35px;
    border: none;
    color: black;
    font-family: 'Metropolis', sans-serif;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    color: black;
    margin-left: auto;
    @media (max-width: 500px) {
        margin-right: 20px;
    }
    @media (min-width: 950px) {
        margin-right: 20px;
    }
`



export const ConnectButton = () => {

    return(
        <ButtonBlock>
            <ConnectModal></ConnectModal>
        </ButtonBlock>
    )
}