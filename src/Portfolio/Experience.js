import './experience.css';
import React from 'react';
function Experience({elRef}) {

  return (
    <section className="experience" id='experience'>
      <h2 ref={ elRef }>Experience</h2>
      <Job jobTitle='Retail Sales Associate' location={'Smokers Paradise'} id={1} year={"2020-2023"}
      description={["Performed sales duties including point-of-sale service, opening, closing, and stocking shelves",
        "Facilitated the training of multiple new hires, creating a detailed training regimen to streamline onboarding",
        "Delivered exceptional customer service that resulted in a commendation for properly addressing customer needs"
        ]}/>
        <Job jobTitle='Social Media Manager' location={'Smokers Paradise'} id={1} year={"2023-Present"}
      description={["Design and execute social media posts to inform and draw in new and returning customers",
        "Engage in regular coordination with the store owner, jointly devising sales strategies and creating sales content",
        "Use Adobe Photoshop and Adobe Premiere to create posts about store events, sales, and closures"
        ]}/>
    </section>
  );
}

function Job({ jobTitle, description, location, id, year}) {
  var descriptionLis = [];
  for(var i = 0; i < description.length; i++) {
    descriptionLis.push(<React.Fragment key={'experience' + id + i}><li><p>{description[i]}</p></li></React.Fragment>);
  }
  return (
    <div className='experienceFlex' >
      <div className='experienceFiller'></div>
      <div className='experienceDiv'>
        <div className='experienceDescription'>
        <h3>{jobTitle}</h3>
          <div className='experienceTop'>
            <div className='experienceJob'>
              <h4>{location}</h4>
            </div>
            <div className='experienceYear'>
              <h4>{year}</h4>
            </div>
          </div>
          
          <ul>
            {descriptionLis}
          </ul>
        </div>
      </div>
      <div className='experienceFiller'></div>
      
    </div>
  );
}
export default Experience;
