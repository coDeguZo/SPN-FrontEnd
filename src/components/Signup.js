import React from 'react'
import {Grid, Segment, Header, Form, Image, Input, Button} from 'semantic-ui-react'
import swal from 'sweetalert';


class Signup extends React.Component{
    state = {
        name: "",
        email: "",
        image: "",
        password: ""
    }

    onChangeState = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = () => {
        const obj = {
            name: this.state.name,
            email: this.state.email,
            image: this.state.image,
            password: this.state.password
        }
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            swal({
                icon: "success",
                text: "Welcome To SPN! You Are Signed In"
            })
            localStorage.setItem("token", data.token)
            this.props.loginUser(data.user)
        })
    }

    render(){
        return(
            <div className="user-signup"> 
            <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='olive' textAlign='center'>
                    <h1 className="signup-font">ⓈⓅⓃ</h1>
                    </Header>
                    <Form 
                    onSubmit={this.handleSubmit}
                    >
                    <Segment stacked>
                    <Form.Field
                        control={Input}
                        label='Full Name'
                        placeholder='Full Name'
                        id="name"
                        onChange={this.onChangeState}
                        required
                    />
                    <Form.Field
                        control={Input}
                        label='Email'
                        placeholder='Email'
                        id="email"
                        onChange={this.onChangeState}
                        required
                    />
                    <Form.Field
                        control={Input}
                        label='Image URL'
                        placeholder='Image'
                        id="image"
                        onChange={this.onChangeState}
                        required
                    />
                    <Form.Field
                        control={Input}
                        type="password"
                        label='Password'
                        placeholder='Password'
                        id="password"
                        onChange={this.onChangeState}
                        required
                    />
                    {/* <div class="ui checkbox">
                        <input type="checkbox" class="hidden" readonly="" tabindex="0" onClick={() => this.myFunction} />
                        <label>Show Password</label>
                    </div> */}
                    <Button type="submit" >Login</Button>

                    {/* <Form.Field
                    control={Checkbox}
                    label='I agree to the Terms and Conditions'
                    /> */}
                    </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
        )
    }
}

export default Signup