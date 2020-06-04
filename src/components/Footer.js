import React from 'react'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => {
    return (
        <div className="footer">
        <Segment inverted vertical style={{ padding: '1em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={5}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                        <List.Item as='a'>Sitemap</List.Item>
                        <List.Item as='a'>Contact Us</List.Item>
                        <List.Item as='a'>More Ways to Find Jobs</List.Item>
                        <List.Item as='a'>Career Advisors</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={5}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                        <List.Item as='a'>Technical Resume Help</List.Item>
                        <List.Item as='a'>Quick Job Fixer</List.Item>
                        <List.Item as='a'>Unlimited Supply exchange</List.Item>
                        <List.Item as='a'>Did We mention Resume Help?</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={5}>
                    <Header as='h4' inverted>
                        BASSY JOBS
                    </Header>
                    <p>
                        COPYRIGHT 2020 
                    </p>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </div>
    )
}

export default Footer