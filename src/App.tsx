import { motion, useMotionValue } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'

function App() {
  const x = useMotionValue(0)
  useEffect(() => {
    x.onChange(() => console.log(x.get()))
  }, [])
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click Me</button>
      <Box
        style={{ x }}
        drag='x'
        dragSnapToOrigin
      />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const BoxVariants = {
  hover: { rotateZ: 90 },
  click: { scale: 1, borderRadius: '100px' },
  drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 10 } },
}
