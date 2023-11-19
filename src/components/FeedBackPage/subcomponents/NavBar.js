import { useState } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  const [collapse, setCollapse] = useState(true)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light translucent">
        <div className="container-fluid">
          <Link
            className="navbar-brand text-white bg-darkblue rounded fw-bold p-3"
            to="/"
          >
            TaskForge
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              onClick={() => {
                setCollapse(!collapse)
              }}
            ></span>
          </button>
          <div
            className={
              collapse
                ? "collapse navbar-collapse justify-content-end"
                : "navbar-collapse"
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link light-blue active p-3"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link className="nav-link p-3" to="/login">
                Login
              </Link>
              <Link className="nav-link p-3" to="/signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar
