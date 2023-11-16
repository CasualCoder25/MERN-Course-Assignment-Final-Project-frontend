import Rocket from "./Rocket"
import Moon from "./Moon"
import * as Component from "./RocketComponents"

const RocketMoon = () => {
  return (
    <Component.RocketMoonContainer>
      <Moon />
      <Rocket />
    </Component.RocketMoonContainer>
  )
}

export default RocketMoon
