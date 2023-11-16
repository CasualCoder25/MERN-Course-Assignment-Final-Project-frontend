import styled from "styled-components"
import { keyframes } from "styled-components"

export const Spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
export const Flicker = keyframes`
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`
export const RocketMoonContainer = styled.div`
  width: 200px;
  height: 200px;
`
export const RocketContainer = styled.div`
  position: relative;
  top: -100%;
  height: 200px;
  width: 200px;
`
export const Orbit = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: relative;
  margin: auto;
  animation: ${Spin} 5s infinite linear;
`
export const Rocket = styled.div`
  & {
    background-color: #fafcf7;
    height: 22px;
    width: 11px;
    border-radius: 50% 50% 0 0;
    position: relative;
    left: -5.5px;
    top: 62.5px;
  }
  &:before {
    position: absolute;
    content: "";
    background-color: #39beff;
    height: 9px;
    width: 25px;
    z-index: -1;
    border-radius: 50% 50% 0 0;
    right: -7px;
    bottom: 0;
  }
  &:after {
    content: "";
    position: absolute;
    background: radial-gradient(circle, #ff6600 20%, transparent 80%);
    height: 21px;
    width: 21px;
    border-radius: 40%;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    animation: ${Flicker} 0.5s infinite alternate;
  }
`
export const Window = styled.div`
  height: 4px;
  width: 4px;
  background-color: #151845;
  border: 1px solid #b8d2ec;
  border-radius: 50%;
  position: relative;
  top: 7px;
  left: 2.5px;
`
export const MoonContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`
export const Moon = styled.div`
  background-color: #39beff;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  top: 30%;
  left: 30%;
  position: relative;
  overflow: hidden;
`
export const Crater = styled.div`
  & {
    background-color: #31b4ff;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    position: relative;
  }
  &:before {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    box-shadow: -3px 0 0 1px #1ca4f9;
    top: 1px;
    left: 3px;
  }
`
export const Crater1 = styled(Crater)`
  top: 15px;
  left: 43px;
  transform: scale(0.7);
`
export const Crater2 = styled(Crater)`
  bottom: 8px;
  left: 29px;
  transform: scale(0.5);
`
export const Crater3 = styled(Crater)`
  left: 8px;
  transform: scale(0.6);
`
export const Crater4 = styled(Crater)`
  left: 64px;
  top: 18px;
  transform: scale(0.9);
`
export const Crater5 = styled(Crater)`
  left: 20px;
  bottom: 2px;
  transform: scale(0.55);
`
export const Shadow = styled.div`
  height: 90px;
  width: 90px;
  box-shadow: 11px 0 0 2px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: relative;
  bottom: 77.5px;
  right: 18px;
`
