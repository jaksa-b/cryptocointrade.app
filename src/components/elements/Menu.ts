import styled, { css } from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
`

type MenuItemProps = {
  active: boolean
}

export const MenuItem = styled<MenuItemProps, 'a'>('a')`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  font-size: 12px;
  font-weight: bold;
  color: ${p => p.theme.color};
  padding: 0px 28px;
  text-decoration: none;
  border-left: 1px solid ${p => p.theme.border};
  border-right: 1px solid ${p => p.theme.border};
  ${(props) => props.active && css`
      border-bottom: 2px solid rgb(49, 121, 205);
  `}
`