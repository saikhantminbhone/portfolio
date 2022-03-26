import React, { useState, useRef } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email: email,
      subject: subject,
      phone: phone,
      message: message
    }

    emailjs.send("service_dnxpin7", "template_4l5hj5r", templateParams, "ERmSknM2aOCUDQW9a").then((res) => {
      console.log(res.text)
    })
    alert("Successfully sent!")

  };


  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='container content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img shadow-sm'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Sai Khant Min Bhone</h1>
                  <p>Full Stack Developer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +9597665779090</p>
                  <p>Email: saikhantminbhone@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex social-icons'>

                    <a href="https://www.facebook.com/saikhant.minbhone.3/" className='btn_shadow'>
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/saikhant_with_rafe/" className='btn_shadow'>
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://github.com/saikhantminbhone" className='btn_shadow'>
                      <i className="fa fa-github-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={name} onChange={(e) => { setName(e.target.value) }} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
