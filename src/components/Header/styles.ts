import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: ${colors.Element};
    height: 120px;
       
    `
    export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto 0;
    padding-left: 30px;
    `
    export const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 30px;
    ` 
    export const Input = styled.input`
    padding: 10px 16px;
    border-radius: 20px;
    border: 1px solid ${colors.background};
    font-size: 14px;
    height: 45px;
    width: 250px;
    `
    export const Icons = styled.div`
    background-color: ${colors.background};
    padding: 10px;
    border-radius: 50%;
    cursor: pointer
    width: 45px;
    height: 45px;
    `
    export const UserIcon = styled(Icons)`
    background-color: ${colors.primary};`
 