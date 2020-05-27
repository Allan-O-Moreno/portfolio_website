import React, {Component} from 'react'; 
import { Grid, Cell} from 'react-mdl';
class Landing extends Component{
    render(){
        return(
                  <div style ={{width: '100%', margin: 'auto'}}>
                      <Grid className="landing-grid">
                          <Cell col={12}>
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
                            alt="avatar"
                            className="avatar-img"
                            />
                             <div className= "banner-text">
                                <h1>Software Developer</h1>
                                
                                <p>C++ | HTML/CSS | Python | React | Swift | C#</p>

                                <hr/> 

                             </div>

                              
                          </Cell>
                      </Grid>
                  </div>
        )
    }
}

export default Landing;