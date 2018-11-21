import React, { ReactNode } from 'react'
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
  children: ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <Layout>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Layout>
  )
}

const Layout = styled<any, 'div'>('div')`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  background-color: ${p => p.theme.backgroundColor};
`
const Main = styled.div`
  flex-direction: column;
  flex: 1 1 0%;
  overflow: hidden;
`

export default MainLayout;