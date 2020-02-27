import React from 'react'
import styled, { keyframes, css } from 'styled-components/macro'

interface BarProps {
  bgBar: string
  color: string
  duration: string
}

const PingPong = styled.div<BarProps>(
  ({ duration, color, bgBar }) => css`
    position: relative;
    margin: 100px auto;
    width: 200px;
    height: 20px;
    background-color: ${bgBar};
    &::after {
      content: '';
      width: 50px;
      height: 20px;
      position: absolute;
      top: calc(50% - 10px);
      left: calc(50% - 100px);
      background-color: ${color};
      animation: ${bar} ${duration} linear infinite alternate;
    }
  `
)

const BarLoader = ({
  bgBar = '#efefef',
  color = '#333',
  duration = '0.5s'
}): JSX.Element => {
  return <PingPong bgBar={bgBar} color={color} duration={duration} />
}

const bar = keyframes`
  0% {
    left: calc(50% - 100px);
  }
  100% {
    left: calc(50% - -50px);
  }
`
export default BarLoader
