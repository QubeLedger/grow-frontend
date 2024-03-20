import styled from "styled-components";
import { EarnHeader } from "../EarnHeader/EarnHeader";
import { EarnSerach } from "../EarnSearch/EarnSearch";
import { EarnFields } from "../EarnFields/EarnFields";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useAssetStore } from "../../../../../hooks/useAssetStore";

const ContainerBlock = styled.div <{ MyPageHeightMob: string }>`
    width: 500px;
    height: 100%;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 100px;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        height: ${props => props.MyPageHeightMob};
    }
`

const ContainerBlockH = styled.div <{TextColor: string}>`
    width: 100%;
    text-align: center;
    color: ${props => props.TextColor};
`

export const EarnContainer = () => {

    const [theme, setTheme] = useToggleTheme()

    const [assets, setAssets] = useAssetStore()

    let Component

    if (assets.length == 0) {
        Component = <ContainerBlockH TextColor={theme.TextColor}>
            <h1 style={{fontSize: "27px"}}>No vaults</h1>
        </ContainerBlockH>
    } else {
        Component = <EarnFields/>
    }

    return(
        <ContainerBlock  MyPageHeightMob={assets.length >= 4 ? '100%;' : 'calc(100vh - 422px);'}>
            <EarnHeader/>
            <EarnSerach/>
            {Component}
        </ContainerBlock>
    )
}