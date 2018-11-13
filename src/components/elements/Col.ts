import styled, { css } from 'styled-components';

type CollProps = {
  empty?: boolean
}

export const Col = styled<CollProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  ${(props) => props.empty && css`
      flex: 1 1 auto;
  `}
`

export const ColSpace = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
`