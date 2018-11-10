import styled, { css } from 'styled-components';


type Props = {
  wide: boolean
}

export const Button = styled<Props, 'button'>('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  height: 25px;
  font-family: atlas, opensans, sans-serif, btcglyph;
  font-size: 10px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.4);
  flex: 1 1 auto;
  border-radius: 1px;
  outline: none;
  transition: transform 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.4);
  border-image: initial;
  background: rgb(21, 35, 44);
  ${(props) => 
    props.wide &&
    css`
      margin-right: 10px;
      flex: 0 1 0%;
      padding: 0px 40px;
    `
  }
`

export const Nav = styled.nav`
  position: relative;
  height: 46px;
  color: rgb(255, 255, 255);
  background-color: rgb(25, 33, 38);
  border-bottom: 1px solid rgb(20, 24, 28);
`

export const Grid = styled.div`
  display: flex;
  flex-shrink: 0;
  -webkit-box-pack: justify;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

type CollProps = {
  empty?: boolean
}

export const Col = styled<CollProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  ${(props) => 
    props.empty &&
    css`
      flex: 1 1 auto;
    `
  }
`

export const ColSpace = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
`
export const Logo = styled.div`
  width: 259px;
  text-align: center;
`

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
  color: rgb(255, 255, 255);
  padding: 0px 28px;
  text-decoration: none;
  border-left: 1px solid rgb(20, 24, 28);
  border-right: 1px solid rgb(20, 24, 28);
  ${(props) =>
    props.active && 
    css`
      border-bottom: 2px solid rgb(49, 121, 205);
    `
  }
`

export const Text = styled.div`
  display: flex;
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
`