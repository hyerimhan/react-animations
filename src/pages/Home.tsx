import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <Ul>
      <Li>
        <Link to='/basic'>Basic Animations</Link>
      </Li>
      <Li>
        <Link to='/variants'>Variants</Link>
      </Li>
      <Li>
        <Link to='/gestures'>Gestures</Link>
      </Li>
      <Li>
        <Link to='/motionValues'>Motion values</Link>
      </Li>
      <Li>
        <Link to='/svgAnimation'>SVG Animation</Link>
      </Li>
      <Li>
        <Link to='/animationPresence'>AnimatePresence</Link>
      </Li>
      <Li>
        <Link to='/slider'>Slider</Link>
      </Li>
      <Li>
        <Link to='/modal'>Modal</Link>
      </Li>
      <Li>
        <Link to='/etc'>Etc</Link>
      </Li>
    </Ul>
  )
}

export default Home

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`

const Li = styled.li`
  text-align: center;
  a {
    width: 100%;
    display: inline-block;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    color: #555;

    &:hover {
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
    }
  }
`
