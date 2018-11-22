import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string,
  children?: React.ReactChildren
}

export const Card = ({ title, children }: Props) => (
  <Wrapper>
    <Header>
      <Title>
        {title}
      </Title>
    </Header>
    <Subheader></Subheader>
    <Content>
      {children}
    </Content>
  </Wrapper>
)

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 0px;
  flex: 1 1 0%;
  color: ${p => p.theme.color};
  overflow: hidden;
  background: ${p => p.theme.backgroundColor};
`
const Header = styled.div`
  flex-shrink: 0;
  align-items: center;
  height: 46px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 28px;
  border-bottom: 1px solid ${p => p.theme.border};
  background: ${p => p.theme.cardHeaderBgColor};
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  align-items: center;
  height: 46px;
`
const Subheader = styled.div``
const Content = styled.div``
