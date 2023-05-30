import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
