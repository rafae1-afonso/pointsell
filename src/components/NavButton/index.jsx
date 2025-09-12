import { NavLink, useLocation } from "react-router";
import styled from "styled-components";

const NavButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 40px;
    gap: 5px;

    border-bottom: ${props => (props.selected ? '2px solid black' : 'none')};

    @media screen and (min-width: 1024px) {
        width: 50px;
        gap: 0px;
    }

    & > p {
        margin: 0;
        font-size: 13px;
        color: ${props => (props.selected ? 'black' : '#757575')};
    }

    &:nth-child(1) {
        color: ${props => (props.selected ? 'black' : '#757575')};
    }
`;

const NavButtonLink = ({ children, toLink }) => {
    const location = useLocation();

    return <NavLink to={toLink}>
        <NavButton selected={toLink === location.pathname}>
            {children}
        </NavButton>
    </NavLink>
};

export default NavButtonLink;