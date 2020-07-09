import React from 'react'
import {Grid} from 'semantic-ui-react'

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
                        <img alt="user" src={process.env.PUBLIC_URL + '/IMG_2939.jpeg'} className="about-user-image"></img>
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
                        <h1>Pupose of ⓈⓅⓃ</h1>
                        <hr className="dividers hr-md-left-0"/>
                        <p4>SPN was created as a way for users to read their favorite Sports News</p4>
                        {/* Need To Get To 4 More Tags */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
            </div>
        )
    }
}

export default About