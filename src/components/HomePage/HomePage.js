import HomePageParticle from "./subcomponents/HomePageParticle"
import NavBar from "./subcomponents/NavBar"
import EmptyComponent from "./subcomponents/EmptyComponent"
import AboutUs from "./subcomponents/AboutUs"

const HomePage = () => {
  return (
    <>
      <HomePageParticle />
      <NavBar />
      <EmptyComponent />
      <AboutUs />
    </>
  )
}

export default HomePage
