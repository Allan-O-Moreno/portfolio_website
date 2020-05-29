import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
           
            </div>

            <h2 style={{paddingTop: '2em'}}>Allan Moreno</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1559 Prater Way Apt A103, Reno, NV 89431 </p>
            <h5>Phone</h5>
            <p>(775) 409-0840</p>
            <h5>Email</h5>
            <p>allanmorenocs@gmail.com</p>
            <h5>LinkedIn</h5>
            <p>https://www.linkedin.com/in/allan-moreno-5106a4187/</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="University of Nevada, Reno"
              schoolDescription= "Bacholers of Science in Computer Science and Engineering. 3.3 GPA"
               />

               <Education
                 startYear={2016}
                 endYear={2020}
                 schoolName="Truckee Meadows Community College"
                 schoolDescription="Associates of Science in Computer Science" 
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2015}
              //endYear={2012} 
        
              jobName="McDonalds | Shift Manager"
              jobDescription="Ensure compliance with safety policies and regulations. 
              Assist General Manager in recruiting, interviewing, and hiring of crew members.
              Motivates and coaches crew members and assists in the training of new crew members.
              Develop strategies to reduce expenses and maximize revenue. Troubleshoot  ISP, POS, and computer systems"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Languages</h2>
              <Skills
                skill="C++"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Swift"
                    progress={55}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                      skill="C#"
                      progress={30}
                      />
                       <Skills
                      skill="Python"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;