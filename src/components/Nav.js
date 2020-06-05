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
                    <Link to="/profile">Profile</Link>
                    <Link to="/login">Login</Link>             
                </div>
            </div>
        </div>
    )
}


export default Nav