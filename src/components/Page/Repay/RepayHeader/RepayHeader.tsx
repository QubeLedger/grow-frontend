import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { BorrowCustomLink } from "../../Borrow/BorrowCustomLink/BorrowCustomLink";

const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    margin-bottom: 20px;
`

const HeaderText = styled.h1`
    font-size: 30px;
    padding-left: 20px;
`

export const RepayHeader = () => {
    
    const [theme, setTheme] = useToggleTheme()

    return(
        <Header>
            <BorrowCustomLink to="/borrow">Borrow</BorrowCustomLink>
            <BorrowCustomLink to="/repay">Repay</BorrowCustomLink>
        </Header>
    )
}