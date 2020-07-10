import React from 'react'
import {Grid, Header, Form, Segment, Button, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

class Login extends React.Component{
    state = {
        email: "",
        password: ""
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()
        const obj = {
            email: this.state.email,
            password: this.state.password
        }
        fetch("https://spn-backend.herokuapp.com/login", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(Resp => Resp.json())
        .then(data => {
            if(!data.user){
                swal({
                    icon: "warning",
                    text: "Incorrect Username or Password"
                })
            } else {
                swal({
                    icon: "success",
                    text: "Signed In"
                })
                localStorage.setItem("token", data.token)
                this.props.loginUser(data.user)
            }
        })
        
    }

    render(){
        return(
            <div className="login-background">
                <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' className="user-login">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header color='olive' textAlign='center'>
                    <h1 className="signup-font">ⓈⓅⓃ</h1>
                    {/* <h1>Welcome Back</h1> */}
                    </Header>
                <br/>
                    <Form
                    size="mini"
                    key="mini"
                    onSubmit={this.handleLoginSubmit}
                    >
                    <Segment stacked>
                        <Form.Input
                        label="email"
                        placeholder="email"
                        name="email"
                        onChange={this.onChangeEmail}
                        value={this.state.email}
                        required
                        />
                        <Form.Input
                        type="password"
                        label="password"
                        placeholder="password"
                        name="password"
                        onChange={this.onChangePassword}
                        value={this.state.password}
                        required
                        />
                        <Button type="submit">Login</Button>
                    </Segment>
                    </Form>
                    <p style={{color: "white"}}>Don't have an account?</p>
                    <Message>
                    <Link to="/signup"> Sign up here</Link>
                </Message>
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default Login