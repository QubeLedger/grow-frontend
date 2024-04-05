import styled from 'styled-components';
import SuccedImg from '../../../assets/icons/Succed.png'

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Block = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    margin: 150px auto;
`
export function SucceedModalComponent(
        actiom: string,
) {
        return <>
                <ContentDiv>
                        <Container>
                                <Block>
                                        <Img src={SuccedImg}></Img>
                                        Succeed {actiom}
                                        {/*<InfoBlock>
                                        <BlockInfo>
                                        <InfoText>Proceed in your wallet</InfoText>
                                        </BlockInfo>
                                </InfoBlock>*/}
                                </Block>
                        </Container>
                </ContentDiv>
        </>
}