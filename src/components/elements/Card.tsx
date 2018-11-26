import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  title: string,
  options?: {
    header: {
      type: string 
    },
    subHeader: {
      type: string
    }
  },
  children?: ReactNode
}

const initialOptions = {
  header: {
    type: 'secondary'
  },
  subHeader: {
    type: 'primary'
  }
}

export const Card = ({ title, options = initialOptions, children }: Props) => (
  <Wrapper>
    <Header type={options.header.type}>
      <Title>
        {title}
      </Title>
    </Header>
    <Subheader type={options.subHeader.type}>subtitle</Subheader>
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

type HeaderProps = {
  type?: string
}

const Header = styled<HeaderProps, 'div'>('div')`
  flex-shrink: 0;
  align-items: center;
  height: 46px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 28px;
  border-bottom: 1px solid ${p => p.theme.border};
  background: ${p => p.type === 'primary' ? p.theme.primaryBgColor : p.theme.secondaryBgColor};
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  align-items: center;
  height: 46px;
`

type SubheaderProps = {
  type?: string,
}

const Subheader = styled<SubheaderProps, 'div'>('div')`
  position: relative;
  flex-shrink: 0;
  height: 31px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  border-top: none;
  border-bottom: 1px solid ${p => p.theme.border};
  background: ${p => p.type === 'secondary' ? p.theme.secondaryBgColor : p.theme.primaryBgColor};
`

const Content = styled.div``
