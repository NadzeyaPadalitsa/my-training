import styled, {css} from 'styled-components';
import { myTheme } from '../styles/Theme.styled';

type StyledBtnPropsType = {
    color?: string
    backgroundColor?: string
    btnType: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    padding: 4px 15px 6px;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    border: 2px solid ${myTheme.colors.button};
    border-radius: 5px;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 12px;
    }

    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        color: ${props => props.color};
        background-color: ${props => props.backgroundColor};
    `}
        
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
        color: ${props => props.color};
        background-color: transparent;
    `}
`
