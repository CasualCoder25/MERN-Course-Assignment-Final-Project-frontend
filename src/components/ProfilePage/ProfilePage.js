import ProfileParticle from "./subcomponents/Particles/ProfileParticle"
import RocketMoon from "./subcomponents/RocketMoon/RocketMoon"
import Tasks from "./subcomponents/Tasks/Tasks"
import * as ProfileComponents from "./subcomponents/Components"
import NavBar from "./subcomponents/Navbar/NavBar"

const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <ProfileParticle />
      <ProfileComponents.ProfileContainer
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <RocketMoon />
        <Tasks />
      </ProfileComponents.ProfileContainer>
    </>
  )
}

export default ProfilePage
