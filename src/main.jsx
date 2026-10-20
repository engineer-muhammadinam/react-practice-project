import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./home"
import About from "./about"
import Services from "./services"
import Contact from "./contact"


createRoot(document.getElementById('root')).render(
<div>
  <Home/>
  <About/>
  <Services/>
  <Contact/>

</div>
)
