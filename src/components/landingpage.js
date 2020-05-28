import React, {Component} from 'react'; 
import { Grid, Cell} from 'react-mdl';

import avatar from './images/allan2.png'

class Landing extends Component{
    render(){
        return(
                  <div style ={{width: '100%', margin: 'auto'}}>
                      <Grid className="landing-grid">
                          <Cell col={12}>
                          <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                            />
                             <div className= "banner-text">
                                <h1>Allan Moreno</h1>
                                
                                <hr/> 

                                <p>C++ | HTML/CSS | Python | React | Swift | C#</p>

                                <div className= "social-links">

                                    {/*Linked in */}
                                    <a href="https://www.linkedin.com/in/allan-moreno-5106a4187/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                    {/* Github */}
                                    <a href="https://github.com/Allan-O-Moreno?tab=repositories" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                

                                </div>



                              

                             </div>

                              
                          </Cell>
                      </Grid>
                  </div>
        )
    }
}

export default Landing;