import styled from "styled-components";

const ARPBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const ARPText = styled.h1`
    font-size: 17px;
    color: #bababa;
`

const ARPAmount = styled.a`
    font-size: 17px;
    font-weight: 700;
    color: #44A884;
`


export const EarnDepositAPR = () => {
    return(
        <ARPBlock>
            <ARPText>Est. APR</ARPText>
            <ARPAmount>16.4%</ARPAmount>
        </ARPBlock>
    )
}