import React ,{useState}from "react"
import Skills from "../components/skills"
import Navbar from "../components/navbar"
import Intro from "../components/Intro"
import Projects from "../components/projects"
import Modal from "../components/Modal"
import About from "../components/about"
import Contact from "../components/contact"


const Portfolio = ()=>{
  
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [modalData, setModalData] = useState("")
    return (
        <>
        <Modal isModalOpen={isModalOpen} modalData={modalData} setIsModalOpen={setIsModalOpen}/>
        <Navbar/>
            <Intro/>
            <About/>
            <Skills/>
            <Projects
              setModalData={setModalData}
              setIsModalOpen={setIsModalOpen}
            /> 
                <Contact/>
             
      
       
         </>
    )
    
}

export default Portfolio