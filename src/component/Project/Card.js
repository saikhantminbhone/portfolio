import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    console.log("hello from toggle modal")
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='fa fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='/' className='arrow' onClick={toggleModal}>
            <i class='fa fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='project-modal'>
          <div onClick={toggleModal} className='project-overlay'></div>
          <div className='project-modal-content d_flex'>
            <div className='project-modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='project-modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
          
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE<i className="fa fa-thumbs-up"></i>
                </button>
              
                <a href={props.github} className='btn_shadow'> <span>VIEW ON GITHUB </span>
                <i className="fa fa-chevron-right"></i>
              </a>
                 
             
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fa fa-times'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
