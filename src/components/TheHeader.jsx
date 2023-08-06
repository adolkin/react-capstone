import TheNav from "./TheNav";
import '../styles/the-header.css'

const TheHeader = () => {
  return (
    <header className="the-header">
      <img src={require("../assets/nav-logo.png")} alt="logo" />
      <TheNav />
    </header>
  )
}

export default TheHeader;