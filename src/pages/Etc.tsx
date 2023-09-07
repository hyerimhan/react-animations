import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Wrapper } from '../App'

const Etc = () => {
  const [clicked, setClicked] = useState(false)
  const toggleClick = () => setClicked((prev) => !prev)
  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {!clicked ? (
          <Circle
            layoutId='circle'
            style={{ borderRadius: '50px' }}
          />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle
            layoutId='circle'
            style={{ borderRadius: 0, scale: 2 }}
          />
        ) : null}
      </Box>
    </Wrapper>
  )
}

export default Etc

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
