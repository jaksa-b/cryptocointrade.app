import React, { ReactNode } from 'react'
import styled from 'styled-components';
import Header from '../Header';

type Props = {
  children: ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <Layout>
      <Header />
      {props.children}
    </Layout>
  )
}

const Layout = styled.div`
  background-color: rgb(21, 35, 44);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`

export default MainLayout;