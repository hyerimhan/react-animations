import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export default App

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: 100%;
  height: 100vh;
`
