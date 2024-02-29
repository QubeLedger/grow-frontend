import styled from "styled-components";

const InputBlock = styled.input`
    width: 50%;
    outline: none;
    text-align: right;
    font-size: 25px;
    font-weight: 400;
    font-family: 'Metropolis', sans-serif;
    color: #969696;
    border: none;
    border-radius: 20px;
    padding-right: 10px;
    margin-left: auto;
    background: transparent;
`


export const  Input = () => {
    return(
        <InputBlock placeholder="0"></InputBlock>
    )
}