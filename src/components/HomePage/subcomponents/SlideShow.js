import React, { useEffect, useState } from "react"
import * as Components from "./Components"
import signupPic from "./pictures/signup.png"
import profilePic from "./pictures/profile.png"
import EditPic from "./pictures/edit.png"

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [Image1, setImage1] = useState(true)
  const [Image2, setImage2] = useState(false)
  const [Image3, setImage3] = useState(false)
  useEffect(() => {
    if (currentSlide === 1) {
      setImage2(false)
      setImage3(false)
      setImage1(true)
    } else if (currentSlide === 2) {
      setImage1(false)
      setImage3(false)
      setImage2(true)
    } else if (currentSlide === 3) {
      setImage2(false)
      setImage1(false)
      setImage3(true)
    }
  }, [currentSlide])
  return (
    <>
      <Components.SlideShowContainer
        height={window.innerHeight}
        width={window.innerWidth}
      >
        <Components.SlidesContainer
          height={window.innerHeight}
          width={window.innerWidth}
        >
          <Components.ContainerFirst display={Image1}>
            <Components.ImageContainer
              height={window.innerHeight}
              width={window.innerWidth}
              src={signupPic}
              alt="Slide 1"
            />
          </Components.ContainerFirst>
          <Components.ContainerSecond display={Image2}>
            <Components.ImageContainer
              height={window.innerHeight}
              width={window.innerWidth}
              src={profilePic}
              alt="Slide 2"
            />
          </Components.ContainerSecond>
          <Components.ContainerThird display={Image3}>
            <Components.ImageContainer
              height={window.innerHeight}
              width={window.innerWidth}
              src={EditPic}
              alt="Slide 3"
            />
          </Components.ContainerThird>
        </Components.SlidesContainer>
        <Components.ButtonContainer style={{ textAlign: "center" }}>
          <Components.Button
            onClick={() => setCurrentSlide(1)}
          ></Components.Button>
          <Components.Button
            onClick={() => setCurrentSlide(2)}
          ></Components.Button>
          <Components.Button
            onClick={() => setCurrentSlide(3)}
          ></Components.Button>
        </Components.ButtonContainer>
      </Components.SlideShowContainer>
    </>
  )
}

export default SlideShow
