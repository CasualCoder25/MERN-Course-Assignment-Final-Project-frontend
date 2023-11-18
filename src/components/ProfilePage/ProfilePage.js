import ProfileParticle from "./subcomponents/Particles/ProfileParticle"
import RocketMoon from "./subcomponents/RocketMoon/RocketMoon"
import Tasks from "./subcomponents/Tasks/Tasks"
import * as ProfileComponents from "./subcomponents/Components"
import NavBar from "./subcomponents/Navbar/NavBar"

const ProfilePage = () => {
  return (
    <div className="bg-color">
      <ProfileParticle />
      <ProfileComponents.Div className="d-flex flex-column justify-content-center align-items-center">
        <NavBar />
        <ProfileComponents.ProfileContainer
          width={window.innerWidth}
          height={window.innerHeight}
          className="container"
        >
          <RocketMoon />
          <Tasks />
        </ProfileComponents.ProfileContainer>
      </ProfileComponents.Div>
    </div>
  )
}

export default ProfilePage
