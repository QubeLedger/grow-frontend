import styled from "styled-components";

export const ARPBlock = styled.div`
    max-width: 100%;
    height: 100%;
    margin-right: 15px;
    display: flex;
    align-items: center;
`

export const ARPText = styled.a`
    font-size: 20px;
    font-weight: 700;
    color: #44A884;
`


export const USQAPR = () => {
    return(
        <ARPBlock>
            <ARPText>16.4%</ARPText>
        </ARPBlock>
    )
}