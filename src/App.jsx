
import "./app.scss"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Parallax from "./components/Parallax/Parallax"
import Contact from "./components/contact/Contact"
import Protofolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"


function App() {

  return (
    <>
      <section id="Home%20Page">
        <Navbar />
        <Hero />
      </section>
      <section id="About%20Us">
        <Parallax type='services' />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Projects">
        <Parallax type='projects' />
      </section>
      <Protofolio />
      <section id="Contact%20Us">
        <Contact />
      </section>

    </>
  )
}

export default App
