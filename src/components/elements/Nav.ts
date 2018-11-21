import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
  height: 46px;
  color: ${p => p.theme.color};
  background-color: ${p => p.theme.headerBgColor};
  border-bottom: 1px solid ${p => p.theme.border};
`