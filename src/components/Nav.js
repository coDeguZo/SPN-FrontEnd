import React from 'react'
import { Link } from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'

const Nav = (props) => {
    return (
        <div> 
            <div className="topnav">
                <Link to="/">ⓈⓅⓃ</Link>
                <Link to="/nba">NBA</Link>
                <Link to="/nba-teams">Teams</Link>
                <Link to="/nba-players">Players</Link>
                {props.user === null || localStorage.length === 0 ? null : <Link to="/highlights">Sports Media</Link>}
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