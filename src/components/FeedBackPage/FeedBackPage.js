import FeedbackPageParticle from "./subcomponents/FeedbackPageParticle"
import NavBar from "./subcomponents/NavBar"
import EmptyComponent from "./subcomponents/EmptyComponent"
import FeedBackForm from "./subcomponents/FeedBackForm"

const FeedbackPage = () => {
  return (
    <div className="container">
      <FeedbackPageParticle />
      <NavBar />
      <EmptyComponent />
      <FeedBackForm />
    </div>
  )
}

export default FeedbackPage
