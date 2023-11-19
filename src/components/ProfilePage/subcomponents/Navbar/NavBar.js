import { useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import "./NavBar.css"

const NavBar = (props) => {
  const [collapse, setCollapse] = useState(true)
  const handleMore = () => {
    props.setPopup(true)
  }
  const handleBrand = () => {
    Axios.get("https://mern-final-project-backend.onrender.com/user-create/logout", {
      withCredentials: true,
    }).then((res) => {
      if (res.data.status === 500) {
        console.log(res.data.error)
      } else {
        window.location.href = "/"
      }
    })
  }
  const handleHome = () => {
    Axios.get("https://mern-final-project-backend.onrender.com/user-create/logout", {
      withCredentials: true,
    }).then((res) => {
      if (res.data.status === 500) {
        console.log(res.data.error)
      } else {
        window.location.href = "/"
      }
    })
  }
  const handleLogout = () => {
    Axios.get("https://mern-final-project-backend.onrender.com/user-create/logout", {
      withCredentials: true,
    }).then((res) => {
      if (res.data.status === 500) {
        console.log(res.data.error)
      } else {
        window.location.href = "/"
      }
    })
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light translucent">
        <div className="container-fluid">
          <Link
            onClick={handleBrand}
            className="navbar-brand text-white bg-darkblue rounded fw-bold p-3"
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
              <button
                onClick={handleHome}
                className="nav-link light-blue active p-3"
                aria-current="page"
                style={{ textAlign: "left" }}
              >
                Home
              </button>
              <button
                onClick={handleMore}
                className="nav-link p-3"
                style={{ textAlign: "left" }}
              >
                Settings
              </button>
              <button
                onClick={handleLogout}
                className="nav-link p-3"
                style={{ textAlign: "left" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar
