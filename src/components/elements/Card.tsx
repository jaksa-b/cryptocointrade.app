import React, { Component } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  title: string
}

export class Card extends Component<Props, {}> {
  render() {
    return (
      <Wrapper>
        <Header>
          <Title>
            {this.props.title}
          </Title>
          </Header>
        <Subheader></Subheader>
        <Content>
          {this.props.children}
        </Content>
      </Wrapper>
    )
  }
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 0px;
  flex: 1 1 0%;
  color: rgb(255, 255, 255);
  overflow: hidden;
  background: rgb(21, 35, 44);
`
const Header = styled.div`
  flex-shrink: 0;
  align-items: center;
  height: 46px;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 28px;
  border-bottom: 1px solid rgb(20, 24, 28);
  background: rgb(47, 61, 69);
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
