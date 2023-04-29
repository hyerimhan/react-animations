import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import BasicAnimations from './pages/BasicAnimations'
import Variants from './pages/Variants'
import Gestures from './pages/Gestures'
import MotionValues from './pages/MotionValues'
import SVGAnimation from './pages/SVGAnimation'
import AnimatePresence from './pages/AnimatePresence'
import Slider from './pages/Slider'
import Etc from './pages/Etc'
import Modal from './pages/Modal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      { path: '/basic', element: <BasicAnimations /> },
      { path: '/variants', element: <Variants /> },
      { path: '/gestures', element: <Gestures /> },
      { path: '/motionValues', element: <MotionValues /> },
      { path: '/svgAnimation', element: <SVGAnimation /> },
      { path: '/animationPresence', element: <AnimatePresence /> },
      { path: '/slider', element: <Slider /> },
      { path: '/etc', element: <Etc /> },
      { path: '/modal', element: <Modal /> },
    ],
  },
])

export default router
