import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import avatar2 from './images/allan2.png'

class About extends Component {
  render() {
    return(
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
          <Cell col={6}>
            <h2>Allan Moreno</h2>
            <img
              src={avatar2}
              alt="avatar"
              className ="avatar2-img"
              
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            I come from a little town from Winnemucca. I love to program and design software. During my freetime enjoy riding bicycles, 
            playing basketball, and rollerskating. I have a Bachelor of Science in Computer Science and Engineering attained with a 3.3 GPA. 
             
             </p>

          </Cell>
          {/* <Cell col={6}>
            <h2>Hobbies</h2>
            <hr/>

            <div className="aboutme-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (775) 409-0840
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    allanmorenocs@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href="https://www.linkedin.com/in/allan-moreno-5106a4187/" rel="noopener noreferrer" target="_blank"> 
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    Allan Moreno
                    </a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell> */}
        </Grid>
      </div>
    )
  }
}

export default About;