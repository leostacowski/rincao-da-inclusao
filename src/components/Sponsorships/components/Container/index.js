import React, { useEffect, useState, useMemo } from 'react'

import './styles.css'

const Container = ({ children = [] } = {}) => {
  const [innerWidth, setInnerWidth] = useState()
  const [innerHeight, setInnerHeight] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!innerWidth) {
        setInnerWidth(window.innerWidth)
      }

      if (!innerHeight) {
        setInnerHeight(window.innerHeight)
      }

      const handleResize = () => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [innerWidth, innerHeight])

  return useMemo(
    () => (
      <article
        className="container"
        style={{
          maxWidth: innerWidth ? `${innerWidth}px` : '100vw',
          maxHeight: innerHeight ? `${innerHeight}px` : '100vh',
        }}
      >
        {children}
      </article>
    ),
    [children, innerWidth, innerHeight],
  )
}

export default Container
