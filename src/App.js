import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Home/Home"
import Portfolio from "./component/Project/Project"

import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import { AboutMe } from "./component/AboutMe/AboutMe"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <AboutMe />
      <Portfolio />

      <Contact />
      <Footer />
    </>
  )
}

export default App
