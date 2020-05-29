
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* React Website */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Allans Website</CardTitle>
            <CardText>
              Allan's website created with React
            </CardText>
            <CardActions border>
              <Button colored  href = "https://github.com/Allan-O-Moreno/portfolio_website" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* UNR Building Classifier Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/swift-15.svg) center / cover'}} >UNR Building Classifier</CardTitle>
            <CardText>
              Mobile Application that classifies buildings at the University of Nevada, Reno. I was in charge 
              of the Front End, and designed the application using swift.
            </CardText>
            <CardActions border>
              <Button colored  href = "https://github.com/Allan-O-Moreno/UNRB" rel="noopener noreferrer" target="_blank">GitHub</Button>
              <Button colored  href = "https://jmyamssi.wixsite.com/unrbc" rel="noopener noreferrer" target="_blank">Project Website</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* UNR Building Classifier Project */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png) center / cover'}} >Asteroids Game</CardTitle>
            <CardText>
              Created a game engine using Ogre3D that consist of a input, graphics, sound, UI, entities, and physics. Utilizing the engine our team created the Team devloped a 3D asteroids game. 
              I focused on the User Interface component of the game.
            </CardText>
            <CardActions border>
              <Button colored  href = "https://github.com/Allan-O-Moreno/CS381_FinalProject" rel="noopener noreferrer" target="_blank">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

        </div>
      )
    } 
    

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Swift</Tab>
          <Tab>C++</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;