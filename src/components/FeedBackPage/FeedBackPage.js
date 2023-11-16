import FeedbackPageParticle from "./subcomponents/FeedbackPageParticle"
import NavBar from "./subcomponents/NavBar"
import EmptyComponent from "./subcomponents/EmptyComponent"
import FeedBackForm from "./subcomponents/FeedBackForm"

const FeedbackPage = () => {
  return (
    <>
      <FeedbackPageParticle />
      <NavBar />
      <EmptyComponent />
      <FeedBackForm />
    </>
  )
}

export default FeedbackPage
