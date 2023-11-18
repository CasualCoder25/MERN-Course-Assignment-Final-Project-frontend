import HomePageParticle from "./subcomponents/HomePageParticle"
import NavBar from "./subcomponents/NavBar"
import EmptyComponent from "./subcomponents/EmptyComponent"
import AboutUs from "./subcomponents/AboutUs"

const HomePage = () => {
  return (
    <div className="container">
      <HomePageParticle />
      <NavBar />
      <EmptyComponent />
      <AboutUs />
    </div>
  )
}

export default HomePage
