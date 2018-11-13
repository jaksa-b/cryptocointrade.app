import styled, { css } from 'styled-components';

type ButtonProps = {
  wide: boolean
}

export const Button = styled<ButtonProps, 'button'>('button')`
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
  ${(props) => props.wide && css`
      margin-right: 10px;
      flex: 0 1 0%;
      padding: 0px 40px;
  `}
`