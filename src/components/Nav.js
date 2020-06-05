import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div> 
            <div className="topnav">
                <Link to="/">SPN</Link>
                <Link to="/nba">NBA</Link>
                <Link to="/nfl">NFL</Link>
                <div className="topnav-right">
                    <Link to="/about">About</Link>
                    {props.user === null || localStorage.length === 0 ? <Link to="/signup">Signup</Link> : null}
                    {props.user === null || localStorage.length === 0 ? <Link to="/login">Login</Link> : <Link to="/profile">Profile</Link>}          
                    {props.user === null || localStorage.length === 0 ? null : <Link to="/login" onClick={props.logout}>Logout</Link>}
                </div>
            </div>
        </div>
    )
}


export default Nav