import React from 'react'
import {Grid, Header, Image, Form, Segment, Button, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import  logo from

class Login extends React.Component{
    state = {
        username: "",
        password: ""
    }

    render(){
        return(
            <div className="login-background">
                <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' className="user-login">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                    <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your User Profile
                    </Header>
                <br/>
                    <Form
                    size="mini"
                    key="mini"
                    // onSubmit={this.handleLoginSubmit}
                    >
                    <Segment stacked>
                        <Form.Input
                        label="email"
                        placeholder="email"
                        name="email"
                        // onChange={this.handleChange}
                        // value={this.state.email}
                        />
                        <Form.Input
                        type="password"
                        label="password"
                        placeholder="password"
                        name="password"
                        // onChange={this.handleChange}
                        // value={this.state.password}
                        />
                    {/* </Form.Group> */}
                        <Button type="submit">Login</Button>
                    </Segment>
                    </Form>
                    <p style={{color: "white"}}>Don't have an account?</p>
                    <Message>
                    <Link to="/sign-up"> Sign up here</Link>
                </Message>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default Login