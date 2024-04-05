import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';


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

const LoadingCircleBlock = styled.div`
    margin: 50px auto 50px auto
`

export const LoadingModalComponent = <>
        <ContentDiv>
            <Container>
                <Block>
                    <LoadingCircleBlock>
                        <CircularProgress disableShrink size={80} />
                    </LoadingCircleBlock>
                    {/*<InfoBlock>
                        <BlockInfo>
                            <InfoText>Proceed in your wallet</InfoText>
                        </BlockInfo>
                    </InfoBlock>*/}
                </Block>
            </Container>
        </ContentDiv>
    </>