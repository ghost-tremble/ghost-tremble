import React from 'react'


const ProjectT = ({name ,image ,desc,
        setModalData, setIsModalOpen, url,repos,preview,tech}) => {
  return (
    <div className='project-container'>
          <div className='project-image'>
              <div>
              {image}
              </div>
          
          </div>
          <div className='project-description'>
          
          <div className='sec'>
          <h3 className="title">
        {name}
            </h3>
            <span><p> {tech}</p></span>
              </div>  
            <p className="description">
               {desc}
            </p>
            <div className='project-links'>
            <span onClick={()=>{
                setModalData({
                    preview,
                    repos,
                    url
                })
                setIsModalOpen(true)
                }}>Preview</span>  <span  onClick={()=> window.open(url, "_blank")}>Visit live</span>
            <span onClick={()=> window.open(repos, "_blank")} >Github repos</span>
            </div>
           
           
          </div>
      </div>
  )
}

export default ProjectT