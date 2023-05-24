import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars.githubusercontent.com/u/57616484?v=4"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mmapaseka Moraba</h2>
            <h4 style={{color: 'grey'}}>Web full Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
             I have a lot of experience with HTML, along with CSS and JavaScript. I find these languages complement each other and help me keep the main newsfeed looking fresh and sharp. I also take professional development courses regularly, 
             and I'm a consistent contributor to online code repositories.”</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>10369A Malewa street
              Orlando West 1804 </p>
            <h5>Phone</h5>
            <p>0633510152</p>
            <h5>Email</h5>
            <p>mmapasekajessica42@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={1999}
              endYear={2016}
              schoolName= "Setotolowane Elsen Secondary School"
              schoolDescription=""
               />

              
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2022}
              endYear={2023}
              jobName="Digital Adcademy"
              jobDescription="I have a great deal of experience with HTML, as well as CSS and JavaScript. I believe these languages complement 
                              each other and enable me to maintain a visually appealing and up-to-date main newsfeed. Furthermore, I regularly 
                              participate in professional development courses and actively contribute to online code repositories."
              />

              <Experience
                startYear={2021}
                endYear={2022}
                jobName="Digital Adcademy"
                jobDescription="It is possible to learn the basics of HTML and CSS within a month by dedicating four hours of instruction per day. 
                                However, becoming truly comfortable and proficient in these languages may take longer, typically around a year 
                                of continuous learning and practice. After completing the initial course, it may take an additional month of
                                practice and application to develop a strong level of comfort with HTML and CSS."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={75}
                />
                <Skills
                skill="HTML/CSS"
                progress={40}
                />
                <Skills
                skill="React"
                progress={20}
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default resume;
