import Hero from "./Hero"
import About from "./ABOUT"
import Projects from "./Projects"
import CursorGlow from "./CursorGlow"
import Contact from "./Contact"

function App() {
  

  return (
    <main className="pb-20 pt-10 pl-5 pr-5 md:pt-15 md:pl-10 md:pr-5 lg:pt-25 lg:pl-20 lg:pr-20">
      <CursorGlow/>
      <div className="flex flex-col gap-15 md:flex-row">
        <div>
          <Hero/>
        </div>
        <div className="flex flex-col gap-20">
          <About/>
          <Projects/>
          <Contact/>       
        </div>
      </div>
    </main>
  )
}

export default App
