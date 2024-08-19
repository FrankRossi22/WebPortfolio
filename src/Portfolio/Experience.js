import './experience.css';
import React from 'react';
function Experience({elRef}) {

  return (
    <section className="experience" id='experience'>
      <h2 ref={ elRef }>Experience</h2>
      <Job jobTitle='Web Development Intern' location={'City of Uhrichsville'} id={1} year={"April 2024 - August 2024"}
      description={["Maintained and updated the city website to attract and inform the population of the Twin Cities",
        "Worked under the director of city services to create a cleaner and more efficient website to direct traffic to important pages and landmarks",
        "Assisted with tech and development issues for the office"
        ]}/>
      <Job jobTitle='Social Media Manager' location={'Smokers Paradise'} id={1} year={"June 2023 - April 2024"}
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
