import React from "react"
import "./Project.css"
import Card from "./Card"
import Project_data from "./Project_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO PROJECT AND KEEP YOUR FEEDBACK</h4>
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            {Project_data.map((value, index) => {
              return <Card key={index} image={value.image} description={value.description} github={value.github} category={value.category} totalLike={value.totalLike} title={value.title} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
