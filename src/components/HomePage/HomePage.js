import HomePageParticle from "./subcomponents/HomePageParticle"
import NavBar from "./subcomponents/NavBar"
import AboutUs from "./subcomponents/AboutUs"
import SlideShow from "./subcomponents/SlideShow"

const HomePage = () => {
  return (
    <div className="container">
      <HomePageParticle />
      <NavBar />
      <SlideShow />
      <AboutUs />
    </div>
  )
}

export default HomePage
