import React from 'react'
import {Grid, GridColumn} from 'semantic-ui-react'

class About extends React.Component{
    render(){
        return(
            <div className="about-background">
                <br />
                <br />
                <br />
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column textAlign="center">
                        <img src={process.env.PUBLIC_URL + '/IMG_2939.jpeg'} className="about-user-image"></img>
                        <br />
                        <br />
                        <p>Nduka-Eze Uzoma Ariguzo</p>
                        <p>Flatiron School Mod 5 Project ⓈⓅⓃ</p>
                        <p>Frameworks: React.js, Ruby on Rails, Semantic-UI-React</p>
                        <p>-</p>
                        {/* Need To Get To 4 More Tags */}
                        </Grid.Column>
                        <Grid.Column textAlign="left">
                        <br />
                        <br />
                        <h2>Pupose of ⓈⓅⓃ</h2>
                        <p4>SPN was created as a way for users to find sports news for users!</p4>
                        {/* Need To Get To 4 More Tags */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </div>
        )
    }
}

export default About