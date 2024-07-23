import './projects.css';
import React from 'react';
function Projects({elRef}) {
  
  function Project({ name, createdWith, description, image, id, links }) {
    var createdWithLis = [];
    for(var i = 0; i < createdWith.length; i++) {
      createdWithLis.push(<React.Fragment key={'projLI' + id + i}><li><img src={createdWith[i].src} style={createdWith[i].myStyle} /></li></React.Fragment>)
    }
    var linkAs = [];
    for(i = 0; i < links.length; i++) {
      linkAs.push(<React.Fragment key={'ProjLink' + id + i}><a className='projectLink' href={links[i].link}><p> <img src={links[i].icon} />{links[i].name}</p></a></React.Fragment>)
    }
    return (
      <div className='projectsFlex' >
        <div className='projectFiller'></div>
        <div className='projectDiv'>
          <div className='projectDescription'>
            <h3>{name}</h3>
            <div className='projectCreatedWith'>
              <p>Created With:</p>
              <ul className='projectCreatedUL'>
                {createdWithLis}
              </ul>
            </div>
            <p className='projectDescP'>{description}</p>
            <div className='projectLinks'>{linkAs}</div>
            </div>
          <div className='projectImage'>
            <img src={image}></img>
          </div>
        </div>
        <div className='projectFiller'></div>
        
      </div>
    );
  }

  const lunchCountMadeWith = [
    { myStyle: {width: 30, height: 30 }, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    { myStyle: {width: 40, height: 40 }, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"},
    { myStyle: {width: 40, height: 40 }, src: "./images/nedB.png"},
    { myStyle: {width: 70, height: 70 }, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"}
  ]
  const bajaMadeWith = [
    { myStyle: {width: 40, height: 40 }, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    { myStyle: {width: 40, height: 40 }, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg"},
    { myStyle: {width: 40, height: 40 }, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"},
  ]

  return (
    <section className="projects" id='projects'>
      <h2 ref={ elRef }>Projects</h2>
      <Project name='Lunch Count' createdWith={lunchCountMadeWith} id={'LC'} links={[
        {link: 'https://github.com/FrankRossi22/LunchCount2024', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', name: 'GitHub'}
      ]}
      description={"With the large growth of LMS (Learning Management Systems) over the past decade, " 
        + "Lunch Count forms as a building block to improving these platforms by providing a robust system for tracking student lunch habits and orders."
        + "Users (Students, Teachers, and Admin) each have their own dashboard with admin having sole access to lunch creation and updating. This was created using JS, Express, and NedB Databases"} 
      image={"./images/image.png"}/>
      <Project name='Baja Buckeyes' createdWith={bajaMadeWith} id={'BB'} links={[
        {link: 'https://osubajasae.wixsite.com/bajabuckeyes', icon: './images/bajaIcon.webp', name: 'Baja'}
      ]}
      description={"Sensor code and testing built by the Data Aquisition sub-team of the Baja Buckeyes." 
        + " Baja Buckeyes is a student organization that designs, builds, and competes an offroad vehicle each year, as a part of Baja SAE."
        + " The DAQ sub-team focuses on working with other sub-teams to create testing programs for their elements of the vehicle." 
        + " This year the team placed 12/61 and 31/107 at Baja SAE California & Pennsylvania respectively."
      } 
      image={"./images/image.png"}/>
  
    </section>
  );
}

export default Projects;
